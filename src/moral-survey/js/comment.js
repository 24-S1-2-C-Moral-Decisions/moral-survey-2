var comment_template = `
<div class="lar-middle">
    <div class="col d-flex justify-content-center">
      <h2 class="h3 bolded-blue" data-i18n="litw-comment-title"></h2>
    </div>
    <p class="survey1-paragraph-body" data-i18n='litw-comment-p1' ></p>
         <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 150px"></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
        <p class="survey1-paragraph-body" data-i18n='litw-comment-p2' ></p>
        <p class="survey1-paragraph-body" data-i18n='litw-comment-p3' ></p>
        <p class="survey1-paragraph-body" data-i18n='litw-comment-p4' ></p>
        <ul>
          <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-comment-s1'></span><a href="https://www.betterhelp.com/get-started/" target="_blank">https://www.betterhelp.com/get-started/ </a></li>
          <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-comment-s2'></span><br><a href="https://internationaltherapistdirectory.com/all-locations/" target="_blank">https://internationaltherapistdirectory.com/all-locations/  </a></li>
        </ul>
        <button type="button" class="btn btn-secondary custom" onclick="$('#btn-next-page').click();" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; width: auto; margin-top: 30px">Next</button>
   
  </div>
    
`;

module.exports = comment_template;
