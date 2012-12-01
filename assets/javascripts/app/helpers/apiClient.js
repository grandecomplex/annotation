function getEverything() {
  getCommentThreads();
  getImage();
}

function getCommentThreads() {
  $.getJSON('data/commentThreads.json', function(commentThreads) {
    Annotation.commentThreads.set("content", commentThreads);
  });
  commentThreadsView.appendTo(".comments");
  
}

function getImage() {
  $.getJSON('data/image.json', function(imageData) {
    Annotation.image.set("content", imageData);
  });
  imageView.appendTo(".image-wrapper");
}