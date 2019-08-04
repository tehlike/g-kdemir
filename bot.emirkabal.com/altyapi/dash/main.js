




function addGuild(guild) {
    $.ajax({
        type: "POST",
        url: "/api/v1/redirectGuild",
        data: JSON.stringify({ guild }),
        contentType: "application/json",
        dataType: "json",
        success: function () { 
            console.log('redirectGuild added');
        },
        failure: function ()
        {
            console.log('reditectGuild failed');
        }
    });
    window.location.href = `/ekle?id=${guild}`;
}