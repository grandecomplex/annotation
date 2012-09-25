//
//
//
// App
//
//
//
var Annotation = Em.Application.create({
  ready: function() {
    getEverything();
  }
});



//
//
//
// Models
//
//
//
Annotation.commentThreads = Ember.Object.extend({
  latestThread: function() {},
  openThread: function() {}
}).create();


Annotation.image = Ember.Object.create();



//
//
//
// Controllers
//
//
//
Annotation.commentThreadsController = Ember.Object.create({
  contentBinding: 'Annotation.commentThreads.content'
});

Annotation.imageController = Ember.Object.create({
  contentBinding: 'Annotation.image.content'
});



//
//
//
// Views
//
//
//
var commentThreadsView = Ember.View.create({
  templateName: 'comment-threads',
  commentThreadsBinding: 'Annotation.commentThreadsController.content'
});

var imageView = Ember.View.create({
  templateName: 'main-image',
  pathBinding: 'Annotation.imageController.content.path'
});



//
//
//
// Data Download
//
//
//
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