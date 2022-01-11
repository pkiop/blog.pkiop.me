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
VALUES ('React', '#010101', '#7ED1EF');

INSERT INTO tag(title, fontColor, color)
VALUES ('AWS', '#010101', '#D6702D');

INSERT INTO tag(title, fontColor, color)
VALUES ('CSS', '#B0BAC6', '#2E4AD5');

INSERT INTO tag(title, fontColor, color)
VALUES ('Google Analytics',  '#010101', '#EEAF42');

INSERT INTO tag(title, fontColor, color)
VALUES ('마케팅',  '#010101', '#5283EA');

INSERT INTO tag(title, fontColor, color)
VALUES ('세바시',  '#010101', '#387725');

INSERT INTO tag(title, fontColor, color)
VALUES ('뇌과학',  '#010101', '#FCD8D4');

INSERT INTO tag(title, fontColor, color)
VALUES ('Backend', '#B0BAC6', '#1560BD');

INSERT INTO tag(title, fontColor, color)
VALUES ('백준', '#B0BAC6', '#1560BD');

ALTER TABLE article_tag
ADD FOREIGN KEY(articleId) REFERENCES article(id);
ALTER TABLE article_tag 
ADD FOREIGN KEY(tagId) REFERENCES tag(id);


