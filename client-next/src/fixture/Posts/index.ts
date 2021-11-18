export const testPosts = `<h2>개요</h2>
<p>이 블로그는 Server Side Rendering으로 동작해서 SEO에서 유리하게 하려고 했다.</p>
<p>프론트엔드 프레임워크로 vue.js를 선택했기 때문에 관련한 서버사이드 프레임워크로 nuxt를 선택했다.</p>
<p>nuxt빌드시에 모든 페이지를 static하게 만들어서 배포하는 방식이 있고, 서버사이드렌더링 방식으로 동작하는 게 있었는데 글 하나 쓸 때마다 빌드를 다시 하는게 마음에 안들어서 후자를 선택했다.</p>
<p>전자가 비용은 훨씬 저렴하지만 (static하게 만들어서 S3에 넣고 배포하기만 하면 거의 드는 돈이 없음) 그럼에도 하고싶어서 서버를 두고 서버사이드 렌더링으로 구현했다.</p>
<p>기존에는 이 서버를 집에 있는 맥 미니로 사용했지만 https적용 관련해서 비용을 따져 EC2로 이주하기로 결정했다.</p>
<h2>맥 미니에 https 적용관련 문제점</h2>
<p>일단 도메인을 blog.pkiop.me를 꼭 사용하고 싶었다. 또 다른 AWS에 배포한 pkiop.me도메인을 사용하는 다른 앱에도 영향가게 하기 싫었다.</p>
<p>맥 미니에서 일단 https를 가능하게 하려면 SSL인증서를 구매나 무료인증서를 통해 갖고 있어야 했다. 무료는 3개월마다 새로 받는다던가 하는 불편함이 있고, 유료는 너무 비쌌다.</p>
<p>또 이미 <a href="http://pkiop.me">pkiop.me</a> 도메인이 AWS에 네임서버를 두고 있어서 https를 맥미니에 하려면 이 네임서버를 바꿔야 하는 것으로 알고 있는데(정확하진 않음) 그러면 다른 서비스에 영향이 가므로 맥 미니에서 배포하는 건 그만두기로 했다.</p>
<h2>AWS EC2로 옮겼을 때 https 이점</h2>
<p>가장 큰 이점은 거의 무료 수준으로 (AWS에 도메인이 종속되긴 하지만) 아마존 인증서를 쓸 수 있다. 무료 인증서나 기타 비싼 것중에 가장 싼 인증서보다 안전한 인증이 된 다.</p>
<p>그 다음 인증서 관련 처음 설정말곤 더 할 게 없다.</p>
<p>또 다른 도메인을 사용하는 앱에도 영향이 가지 않는다.</p>
<h2>AWS EC2 https 설정</h2>
<ol>
<li>AWS Certificate Manager에서 도메인 인증을 받는다.</li>
</ol>
<p><img src="https://user-images.githubusercontent.com/34783156/111827550-5d7def00-892d-11eb-94e6-75e6cb33f30e.png" width="100%"></img></p>
<ol start="2">
<li>로드벨런서에 이 인증된 도메인을 연결하고 로드벨런서의 80포트를 443포트로 redirect하고 443포트에 들어온 패킷은 target group설정으로 EC2로 보내도록 한다.</li>
</ol>
<p><img src="https://i.ytimg.com/vi/bWPTq8z1vFY/maxresdefault.jpg" width="70%"></img></p>
<p>여기서 많은 블로그 설명에 target group설정을 할 때 로드 벨런서 443포트로 오면 EC2 80포트로 보내도록 했는데 EC2에선 80포트로 바로 서버를 켤 수 없다. 그래서 8080등으로 켜고 EC2에서 iptables나 nginx등 방법으로 80포트로 들어오는 정보를 8080으로 REDIRECT하는데 굳이 그럴필요 없이 target group설정할 때 EC2 80포트 말고 8080포트로 바로 보내도록 하면 쉽게 설정 가능하다.</p>
<h2>EC2 인스턴스 결정</h2>
<p>고작 블로그 서버 배포고, 많은 사람이 당장은 안 들어올테니까 가장 싼 t3.nano를 사용하려고 했다. 거의 한달에 5천원 수준으로 쓸 수 있으니 괜찮았다.</p>
<p>그런데 이걸 쓰니 npm install을 하면 중간에 뻗었다.</p>
<p>다음 t3.micro를 써봤다. 한 달 만 원 이내로 그나마 합리적으로 사용할 수 있다. 이건 npm install은 잘 되고, nuxt dev로 서버도 잘 켜지는데 build만 하면 90%에서 멈춰서 인스턴스가 뻗어버린다..</p>
<p>그래서 빌드를 인스턴스에서 하는게 아니라 내 PC에서 빌드를 해서 그 파일을 넣어줘봤다. 그런데 빌드 환경이 달라서인가 자꾸 node_modules/.foo/.bar/nuxt 에 ../package.json이 없다는 에러가 떴다.</p>
<p>이런 설정 관련으로 3일을 넘게 보내니까 너무 답답해서 t3.small을 써보자 하고 써봤다. 굉장히 빠르고 잘 동작해서 속 시원했다. 비용을 살펴보니 한 달에 17000원이었다.</p>
<h2>앞으로 계획</h2>
<p>무식하면 몸이 고생이라고 저 build만 잘 하면 싼 인스턴스에서 서버를 돌릴 수 있을 것 같은데 그걸 고민하기 전까진 17000원 그냥 내야겠다. 이 어마어마한 투자비용을 회수할 수 있도록 블로그 글 열심히 써야겠다.</p>
<p>또 거의 자원이 남아도는데 여기에 다른 앱도 배포해서 최대한 부려먹어야겠다.</p>
<h3>Reference</h3>
<p><a href="https://www.youtube.com/watch?v=bWPTq8z1vFY">https://www.youtube.com/watch?v=bWPTq8z1vFY</a></p>`;

export const testFrontmatter = {
  title: 'AWS EC2로 이주 (for https)',
  date: 'May 05, 2021',
  mainCategory: '개발',
  subCategory: 'blog.pkiop.me',
  tag: ['AWS'],
  slug: '/migrate-to-aws-ec2',
};
