
    function copyFunc(shortUrl, button) {
      const copyText = "http://127.0.0.1:8080/" + shortUrl;
      const textArea = document.createElement('textarea');
      textArea.value = copyText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      button.innerHTML = `<i class="bi bi-check2"></i>`;
      button.classList.remove("btn-info")
      button.classList.add("btn-success")
      
      setTimeout(function() {
        button.innerHTML = `<i class="bi bi-copy"></i>`;
        button.classList.remove("btn-success")
        button.classList.add("btn-info")
      }, 500);
    }




    async function deleteUrl(id,button){


      
        fetch(`http://127.0.0.1:8080/delete/${id}`,{
          method: "DELETE"
        }).then(res=>res.json()).catch((err)=>console.log(err))
        window.location.reload();
    }
   

