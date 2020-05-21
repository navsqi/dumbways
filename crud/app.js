const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: KONEKSI DATABASE
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'course',
});

// TODO: RENDER COURSES
app.get('/', (req, res) => {
  db.getConnection(function (err, connection) {
    connection.query(
      'SELECT course.id, course.name, course.thumbnail, course.description, author.author_name FROM course JOIN author ON course.id_author=author.id',
      function (err, rows) {
        connection.release();
        if (err) throw err;

        res.render('index', {
          courses: rows,
        });
      }
    );
  });
});

// TODO: UPLOAD IMAGE HANDLER
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/');
  },
  filename: function (req, file, cb) {
    const imageFormat = file.mimetype.split('/')[1];
    const fileName = `thumbnail-${Date.now()}.${imageFormat}`;
    cb(null, fileName);
  },
});

const upload = multer({
  storage,
});

// TODO: COURSE
app.get('/course/insert', (req, res) => {
  db.getConnection(function (err, connection) {
    connection.query('SELECT * FROM author', function (err, rows) {
      connection.release();
      if (err) throw err;

      res.render('insertCourse', {
        authors: rows,
      });
    });
  });
});

app.post('/course/insert', upload.single('thumbnail'), (req, res) => {
  if (req.file) req.body.thumbnail = req.file.filename;

  let { name, author, thumbnail, duration, description } = req.body;
  let values = [[name, author, thumbnail, duration, description]];

  db.getConnection(function (err, connection) {
    connection.query(
      'INSERT INTO course (name, id_author , thumbnail, duration, description) VALUES ?',
      [values],
      function (err, rows) {
        connection.release();
        if (err) throw err;

        res.redirect('/');
      }
    );
  });
});

// TODO: AUTHOR
app.get('/author/insert', (req, res) => {
  res.render('insertAuthor');
});

app.post('/author/insert', upload.single('thumbnail'), (req, res) => {
  console.log(req.body);
  db.getConnection(function (err, connection) {
    connection.query('INSERT INTO author (author_name) VALUES ?', [[[req.body.author_name]]], function (err, rows) {
      connection.release();
      if (err) throw err;

      console.log('insert author success');
      // res.redirect('/');
    });
  });
});

// TODO: CONTENT
app.get('/content/insert', (req, res) => {
  db.getConnection(function (err, connection) {
    connection.query('SELECT * FROM course', function (err, rows) {
      connection.release();
      if (err) throw err;

      res.render('insertContent', {
        courses: rows,
      });
    });
  });
});

app.post('/content/insert', upload.single('thumbnail'), (req, res) => {
  let { name, video_link, type, course } = req.body;
  let values = [[name, video_link, type, course]];

  db.getConnection(function (err, connection) {
    connection.query('INSERT INTO content (name, video_link, type, id_course) VALUES ?', [values], function (
      err,
      rows
    ) {
      connection.release();
      if (err) throw err;

      res.redirect('/');
    });
  });
});

// TODO: DETAIL CONTENT
app.get('/content/:id', (req, res) => {
  db.getConnection(function (err, connection) {
    connection.query(
      'SELECT course.name, course.thumbnail, course.description, course.duration, content.name AS content_name, content.video_link, author.author_name FROM course, content, author WHERE course.id=' +
        req.params.id +
        ' AND content.id_course=course.id AND course.id_author=author.id',
      function (err, rows) {
        connection.release();
        if (err) throw err;
        console.log(rows);
        res.render('detailContent', {
          contents: rows,
        });
      }
    );
  });
});

// TODO: DELETE COURSE
app.post('/course/delete/:id', (req, res) => {
  db.getConnection(function (err, connection) {
    connection.query('DELETE FROM course WHERE id=' + req.params.id, function (err, rows) {
      if (err) throw err;
      console.log('Number of records deleted: ' + rows.affectedRows);

      connection.query('DELETE FROM content WHERE id_course=' + req.params.id, function (err, rows) {
        connection.release();
        if (err) throw err;
        console.log('Number of content records deleted: ' + rows.affectedRows);
        res.redirect('/');
      });
    });
  });
});

app.listen(3000, () => console.log('Listening on port 3000'));
