//stuff

function redirect() {
    window.location.href = "index.html";
}

$(function() {
     $.get("https://api.jsonbin.io/b/617154ed9548541c29c6664c", function(posts) {
         let section = $('<section>');
        for (post of posts) {

            let div = $('<div class= "content-container">');
            let profilePic = $('<img class="prof-icon">').attr("src", "res/images/profile_icon_blank.png");
            let timestamp = $('<span class="timestamp">').text(post.timestamp);
            let caption = $('<span class="caption">').text(post.caption);
            let a = $('<a href="https://i.imgur.com">');

            let picture = $('<img class="content-img">').attr("src", post.content);//.attr("width", "150").attr("height", "70");

            //let a = $('<a href="https://icatcare.org">');

            //let picture = $('<img class="content-img">').attr("src", "https://icatcare.org/app/uploads/2018/07/Helping-your-new-cat-or-kitten-settle-in-1.png").attr("width", "150").attr("height", "70");//post.content);

            div.append(profilePic);
            div.append(timestamp);

            a.append(picture);
            div.append(a);

            div.append(caption);

            section.append(div);
            
        }
        $('body').append(section);
    })
}); 