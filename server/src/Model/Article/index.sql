CREATE TABLE article ( 
  id INT PRIMARY KEY AUTO_INCREMENT, 
  title VARCHAR(64) NOT NULL, 
  summary VARCHAR(255) NOT NULL,
  createAt DATETIME NOT NULL,
  updateAt DATETIME NOT NULL,
  slug VARCHAR(64) NOT NULL, 
  mainCategoryId INT NOT NULL, 
  subCategoryId INT NOT NULL, 
  readTime FLOAT(4) NOT NULL,
  contents TEXT NOT NULL
) ENGINE=INNODB; 


ALTER TABLE article
ADD FOREIGN KEY(mainCategoryId) REFERENCES category(id);

ALTER TABLE article
ADD FOREIGN KEY(subCategoryId) REFERENCES category(id);

INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents)
VALUES ('a', 'a summary', '2021-11-28', '2021-11-28', '/a', 1, 2, 1.4, 'contents');