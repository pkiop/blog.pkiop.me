CREATE TABLE article_tag (
  articleId INT NOT NULL,
  tagId INT NOT NULL
);

CREATE TABLE tag ( 
  id INT PRIMARY KEY AUTO_INCREMENT, 
  title VARCHAR(64) NOT NULL, 
  fontColor VARCHAR(8) NOT NULL,
  color VARCHAR(8) NOT NULL
) ENGINE=INNODB; 

INSERT INTO tag(title, fontColor, color)
VALUES ('develop', '#000000', '#ffffff');

ALTER TABLE article_tag
ADD FOREIGN KEY(articleId) REFERENCES article(id);
ALTER TABLE article_tag 
ADD FOREIGN KEY(tagId) REFERENCES tag(id);


