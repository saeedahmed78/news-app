					function check(){
					$.ajax({
						url: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2d0fcf8a083a44d5941c9cd307303ddb",
						success:function(data){
							console.log(data);
							for(i=0 ; i<data.articles.length;i++){
								
								document.querySelector(".section1").innerHTML += `
						<div class="bg-img" style="background-image: url(${data.articles[i].urlToImage})">
						<div class="bg-dark">		
						<a href = "${data.articles[i].url}" style = "color:white;">                                           
						<div class="title n1">${data.articles[i].title}</div>
						</a>
						</div>       
						</div>`;
								
						}

					}

					})

						$.ajax({
						url: "https://newsapi.org/v2/everything?sources=bbc-news&apiKey=2d0fcf8a083a44d5941c9cd307303ddb",
						success:function(data){
						console.log(data);
						for(let i = 0;  i<=19; i++){
						document.querySelector(".section2").innerHTML +=`
						<div class="bg-img" style="background-image: url(${data.articles[i].urlToImage})">
						<div class="bg-dark">
						<a href = "${data.articles[i].url}" style = "color:white;">                   
						<div class="title n1">${data.articles[i].title}</div>
						</a>                
						</div>       
						</div>`;
						}
							}   
					})
					}
