$document.ready(function{
                          var options={
                                        beforeSend:function()
                                        {
                                          $("#progressbox").show();
                                          $("#progressbar").width('0%');
                                          $("#message").empty();
                                          $("#percent").html("0%");
                                        },
                                        uploadProgress:function
