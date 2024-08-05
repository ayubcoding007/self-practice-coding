let insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class="color">
    <table class="table">
  <tr class="row">
    <th>Key</th>
    <th>Key code</th>
    <th>Code</th>
  </tr>
  <tr class="row">
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>
    </div>
    
    `;
});
