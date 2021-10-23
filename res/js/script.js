//stuff

function redirect() {
    window.location.href = "index.html";
}

$(function() {
     $.get("res/json/posts.json", function(posts) {
         let section = $('<section>');
        for (post of posts) {

            let div = $('<div class= "content-container">');

            let a = $('<a class="tooltip">');
            
            let profilePic = $('<img class="prof-icon">').attr("src", "res/images/profile_icon_blank.png");
            
            let popup = $('<span>').text("Username: " + post.username + "\nEmail: " + post.email);
            
            
            let timestamp = $('<span class="timestamp">').text(post.timestamp);
            
            
            let picture = $('<img class="content-img">').attr("src", post.content);//.attr("width", "150").attr("height", "70");
            
            let caption = $('<span class="caption">').text(post.caption);
            let button = $('<button class="like">').text("Like");

            a.append(profilePic);
            a.append(popup);

            div.append(a);
            div.append(timestamp);
            div.append(picture);
            div.append(caption);

            div.append(button);

            section.append(div);
            
        }
        $('body').append(section);
    })
});
$(document).ready(function(){
    $('#profile-pic').click(function() {
        $('.userinfo').toggle("slide")});
});
