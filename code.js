function renderMovie(movie){
    // $(".infosection h1")
    document.getElementById("movietitle").innerText = movie.title;
    document.getElementById("moviedescription").innerText = movie.description;
    document.getElementById("movieimage").setAttribute("src", movie.image);

    let castList = "";
    for(let i=0; i<movie.actors.length; i++){
        castList += "<li>" + movie.actors[i] + "</li>";
      }
      document.getElementById("movieactors").innerHTML = castList;
  }
  function changeStarRating (rating){
      for(let i=1; i<=5; i++){
          let star = document.getElementById("star" + i);
          if (i<= rating){
              star.classList.add("filled");
          } else {
              star.classList.remove("filled");
          }
      }
  }

  for(let i=1; i<=5; i++) {
      let star = document.getElementById("star" + i);
      star.addEventListener("click", function(){
          changeStarRating(i);
      });
  }
  renderMovie(movieData);
