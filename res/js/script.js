

function redirect() {
    window.location.href = "index.html";
}

$(function() {
     $.get("res/json/posts.json", function(posts) {
         // https://api.jsonbin.io/b/61740fb59548541c29c766b3

         let section = $('<section>');
        for (post of posts) {

            let div = $('<div class= "content-container">');

            let a = $('<a class="tooltip">');
            
            let profilePic = $('<img class="prof-icon">').attr("src", "res/images/profile_icon_blank.png");
            
            let popup = $('<span>');
            let username = $('<p>').text("Username: " + post.username);
            let useremail = $('<p>').text("Email: " + post.email);

            popup.append(username);
            popup.append(useremail);
            
            let timestamp = $('<span class="timestamp">').text(post.timestamp);
            
            
            let picture = $('<img class="content-img">').attr("id", "profile-pic1").attr("src", post.content);//.attr("width", "150").attr("height", "70");
            
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
        $('.userinfo').toggle("")});
});