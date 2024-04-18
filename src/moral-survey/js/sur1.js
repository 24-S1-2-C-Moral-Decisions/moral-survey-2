var template1 = `
    <div class="lar-middle" id="train1">

      <h2 class="bolded-blue" data-i18n="litw-motivationsurvey-header"></h2>
      <div class="survey1-paragraph">
        <ul>
          <li>
            <strong class="survey1-paragraph-header" data-i18n='litw-sur1-body-first-p1'></strong>
            <ul>
              <li class="content"><span style="font-weight: bolder" data-i18n='litw-sur1-body-first-s1'></span><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-first-s2'></span></li>
            </ul>
          </li>

          <li>
            <strong class="survey1-paragraph-header" data-i18n='litw-sur1-body-second-p1'></strong>
            <ul>
              <li class="content"><span style="font-weight: bolder" data-i18n='litw-sur1-body-second-s1'></span><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-second-s2'></span>
                <span style="font-weight: bolder" class="survey1-paragraph-body" data-i18n='litw-sur1-body-second-s3'></span><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-second-s4'></span></li>
              <li class="content">
                <p class="survey1-paragraph-body" data-i18n='litw-sur1-body-second-p2'></p>
              </li>
            </ul>
          </li>

          <li>
            <strong class="survey1-paragraph-header" data-i18n='litw-sur1-body-third-p1'></strong>
            <ol>
              <li class="content"><strong class="survey1-paragraph-header" data-i18n='litw-sur1-body-third-p2'></strong>
                <ul>
                  <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-third-s1'></span>
                    <ul>
                      <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-third-s2'></span></li>
                      <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-third-s3'></span></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="content"><strong class="survey1-paragraph-header" data-i18n='litw-sur1-body-third-p3'></strong>
                <ul>
                  <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-third-s4'></span>
                    <ul>
                      <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-third-s5'></span></li>
                      <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-third-s6'></span></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </li>
        </ul>
      </div>

      <h2 class="bolded-blue" data-i18n="litw-motivationsurvey-skip"></h2>
      <button type="submit" class="btn btn-secondary" style="margin-bottom: 3%" onclick="$('#btn-next-page').click();">Skip</button>

      <h2 class="bolded-blue" data-i18n="litw-motivationsurvey-header2"></h2>
      <div class="survey1-paragraph">
        <span class="survey1-paragraph-body" data-i18n='litw-sur1-body-uncertainty-s1' style="font-weight: bolder"></span ><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-uncertainty-s2'></span>
        <ul>
          <li class="content"><span class="survey1-paragraph-body line" data-i18n='litw-sur1-body-uncertainty-p1'></span><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-uncertainty-s3'></span></li>
          <li class="content"><span class="survey1-paragraph-body line" data-i18n='litw-sur1-body-uncertainty-p2'></span><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-uncertainty-s4'></span></li>
        </ul>
      </div>

      <div class="survey1-paragraph">
        <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur1-body-qus-p1' style="font-weight: bolder"></p>
        <span class="survey1-paragraph-body lar-font" data-i18n='litw-sur1-body-qus-p2' style="font-weight: bolder"></span>
        <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur1-body-qus-p3' style="font-weight: bolder"></p>
        <img class="survey1-img" src="../WechatIMG1018.jpg" alt="For every 100 Reddit users who made NA judgements, 43 users are very certain in NA">
      </div>

      <div class="survey1-paragraph">
        <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur1-body-qus-p4' style="font-weight: bolder"></p>
      </div>

      <div class="survey1-paragraph">
        <form id="myForm" class="needs-validation" novalidate>
          <input type="radio" class="btn-check form-check-input" data-bs-toggle="collapse" data-bs-target="#train-collapseExample1" aria-expanded="false" aria-controls="train-collapseExample1"  name="train-options" id="train-option1" autocomplete="off" required>
          <label class="btn btn-light jud form-check-label" for="train-option1">High uncertainty</label><br>
          <input type="radio" class="btn-check form-check-input" data-bs-toggle="collapse" data-bs-target="#train-collapseExample2" aria-expanded="false" aria-controls="train-collapseExample2" name="train-options" id="train-option2" autocomplete="off" required>
          <label class="btn btn-light jud form-check-label" for="train-option2" >Low uncertainty</label>
          <div class="invalid-feedback">Please answer the question</div>
          <div class="invalid-feedback2" id="wrong" style="color: red;display: none">Your answer is wrong. Please choose the right answer to proceed.</div>
          <div class="room">
            <div class="collapse" id="train-collapseExample1">
              <div class="card-body answer">
                <p class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans-p1' style="font-weight: bolder"></p>
                <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans-s1' style="font-weight: bolder"></span>
                <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans-s2'></span>
              </div>
            </div>
            <div class="collapse" id="train-collapseExample2">
              <div class="card-body answer">
                <p class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans2-p1' style="font-weight: bolder"></p>
                <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans2-s1' style="font-weight: bolder"></span>
                <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans2-s2'></span><br>
                <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans2-s3' style="font-weight: bolder"></span>
                <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans2-s4'></span>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-secondary custom"  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; width: auto;" onclick="if(this.form.checkValidity()) { if(document.getElementById('train-option2').checked){document.getElementById('wrong').style.display = 'block';} else { document.getElementById('train1').style.display = 'none';document.getElementById('train2').style.display = 'block';window.scrollTo({top: 0});   }}else {  this.form.stopPropagation(); } return false;">Next</button>
        </form>
      </div>
    </div>
    <div class="foot"></div>

  <div class="lar-middle" id="train2" style="display: none">
    <h2 class="bolded-blue" data-i18n="litw-motivationsurvey-header-2"></h2>
    <div class="survey1-paragraph">
      <span class="survey1-paragraph-body line" style="font-weight: bolder;" data-i18n='litw-sur2-body-first-s1'></span><span class="survey1-paragraph-body" data-i18n='litw-sur2-body-first-s2'></span>
      <span class="survey1-paragraph-body" style="font-weight: bolder" data-i18n='litw-sur2-body-first-s3'></span><span class="survey1-paragraph-body" data-i18n='litw-sur2-body-first-s4'></span>
      <p class="survey1-paragraph-body line" style="margin-top: 20px;margin-bottom: 0" data-i18n='litw-sur2-body-first-p1'></p>
      <span class="survey1-paragraph-body" style="font-weight: bolder" data-i18n='litw-sur2-body-first-s5'></span>
      <ul>
        <li class="content">
          <span class="survey1-paragraph-body" data-i18n='litw-sur2-body-first-l1'></span>
          <ul>
            <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur2-body-first-s6'></span></li>
            <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur2-body-first-s7'></span></li>
          </ul>
        </li>
        <li class="content">
          <span class="survey1-paragraph-body" data-i18n='litw-sur2-body-first-l2'></span>
          <ul>
            <li class="content"><p class="survey1-paragraph-body" data-i18n='litw-sur2-body-first-p2'></p></li>
          </ul>
        </li>
      </ul>
    </div>

    <h2 class="bolded-blue" data-i18n="litw-motivationsurvey-header-3"></h2>
    <div class="survey1-paragraph">
      <span class="survey1-paragraph-body" data-i18n='litw-sur2-body-idm-s1' style="font-weight: bolder"></span ><p class="survey1-paragraph-body" data-i18n='litw-sur2-body-idm-p1' style="margin-bottom: 0"></p>
      <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-idm-p2' style="font-weight: bolder"></p>
      <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-ans-text'></span>
      <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur2-body-idm-p3' style="font-weight: bolder"></p>
    </div>



    <div class="survey1-paragraph">
      <form id="decisionForm" class="form needs-validation" novalidate>
        <input type="radio" class="btn-check form-check-input" name="options" id="option1" autocomplete="off" required>
        <label class="btn btn-light jud form-check-label YA-NA " data-target="#YA" for="option1" data-i18n='litw-sur2-body-ans-la1'></label><br>
        <input type="radio" class="btn-check form-check-input" name="options" id="option2" autocomplete="off" required>
        <label class="btn btn-light jud form-check-label YA-NA " data-target="#NA" for="option2" data-i18n='litw-sur2-body-ans-la2'></label>
        <div class="survey1-paragraph">
          <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur2-body-cho-p1' style="font-weight: bolder;margin-top: 130px"></p>

          <input type="radio" class="btn-check form-check-input" name="decision" id="option3" autocomplete="off" required>
          <label class="btn  btn-light first-cho form-check-label" for="option3" data-i18n='litw-sur2-body-cho-la1'></label>
          <input type="radio" class="btn-check form-check-input" name="decision" id="option4" autocomplete="off" required>
          <label class="btn  btn-light first-cho form-check-label" for="option4" data-i18n='litw-sur2-body-cho-la2'></label>
          <input type="radio" class="btn-check form-check-input" name="decision" id="option5" autocomplete="off" required>
          <label class="btn btn-light first-cho form-check-label" for="option5" data-i18n='litw-sur2-body-cho-la3'></label>
          <input type="radio" class="btn-check form-check-input" name="decision" id="option6" autocomplete="off" required>
          <label class="btn btn-light first-cho form-check-label" for="option6" data-i18n='litw-sur2-body-cho-la4'></label>
          <input type="radio" class="btn-check form-check-input" name="decision" id="option7" autocomplete="off" required>
          <label class="btn btn-light first-cho form-check-label" for="option7" data-i18n='litw-sur2-body-cho-la5'></label>
          <div class="invalid-feedback">
            Please answer the question.
          </div>
        </div>
        <button type="submit" class="btn btn-secondary custom" id="sub1" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; width: auto;">Next</button>
      </form>
    </div>

    <div class="survey1-paragraph hide-show" id="YA">
      <h2 class="bolded-blue" data-i18n="litw-motivationsurvey-header-4" style="margin-top:80px"></h2>
      <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-group-p1' style="font-weight: bolder"></p>
      <ul>
        <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur2-body-YA-s1' style="font-weight: bolder"></span>
          <span class="survey1-paragraph-body" data-i18n='litw-sur2-body-YA-p1'></span>
        </li>
        <li class="content">
          <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-YA-p2' style="font-weight: bolder"></p>
        </li>
      </ul>

      <img class="survey1-img" src="../WechatIMG1018.jpg" alt="For every 100 Reddit users who made NA judgements, 43 users are very certain in NA">

      <form id="myForm2" class="form needs-validation" novalidate>
        <input type="radio" class="btn-check form-check-input" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"   name="YA-options" id="YA-option1" autocomplete="off" required>
        <label class="btn btn-light jud form-check-label" for="YA-option1" data-i18n='litw-sur2-body-ans-la1'></label><br>
        <input type="radio" class="btn-check form-check-input" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2"  name="YA-options" id="YA-option2" autocomplete="off" required>
        <label class="btn btn-light jud form-check-label" for="YA-option2" data-i18n='litw-sur2-body-ans-la2'></label>

        <div class="YA-room">
          <div class="collapse" id="collapseExample1">
            <div class="card-body answer">
              <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-ans-s1'></span>
            </div>
          </div>
          <div class="collapse" id="collapseExample2">
            <div class="card-body answer">
              <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-ans-s2'></span>
            </div>
          </div>
        </div>


        <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur2-body-cho-p1' style="font-weight: bolder;"></p>

        <input type="radio" class="btn-check form-check-input" name="YA-decision" id="YA-option3" autocomplete="off" required>
        <label class="btn  btn-light cho form-check-label" for="YA-option3" data-target="#ans-1" data-i18n='litw-sur2-body-cho-la1'></label>
        <input type="radio" class="btn-check form-check-input" name="YA-decision" id="YA-option4" autocomplete="off" required>
        <label class="btn  btn-light cho form-check-label" for="YA-option4" data-target="#ans-2" data-i18n='litw-sur2-body-cho-la2'></label>
        <input type="radio" class="btn-check form-check-input" name="YA-decision" id="YA-option5" autocomplete="off" required>
        <label class="btn btn-light cho form-check-label" for="YA-option5" data-target="#ans-3" data-i18n='litw-sur2-body-cho-la3'></label>
        <input type="radio" class="btn-check form-check-input" name="YA-decision" id="YA-option6" autocomplete="off" required>
        <label class="btn btn-light cho form-check-label" for="YA-option6" data-target="#ans-4" data-i18n='litw-sur2-body-cho-la4'></label>
        <input type="radio" class="btn-check form-check-input" name="YA-decision" id="YA-option7" autocomplete="off" required>
        <label class="btn btn-light cho form-check-label" for="YA-option7" data-target="#ans-5" data-i18n='litw-sur2-body-cho-la5'></label>


        <div class="survey1-paragraph-body YA-ans" id="ans-1">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an1'></span>
          <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-leave' style="font-weight: bolder"></p>
        </div>
        <div class="survey1-paragraph-body YA-ans" id="ans-2">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an2'></span>
          <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-leave' style="font-weight: bolder"></p>
        </div>
        <div class="survey1-paragraph-body YA-ans" id="ans-3">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an3'></span>
          <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-leave' style="font-weight: bolder"></p>
        </div>
        <div class="survey1-paragraph-body YA-ans" id="ans-4">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an4'></span>
          <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-leave' style="font-weight: bolder"></p>
        </div>
        <div class="survey1-paragraph-body YA-ans" id="ans-5">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an5'></span>
          <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-leave' style="font-weight: bolder"></p>
        </div>
        <div class="invalid-feedback">
          Please answer the question.
        </div>
        <button type="submit" class="btn btn-secondary custom" id="sub2" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; width: auto; margin-top: 30px" onclick="if(this.form.checkValidity()) { $('#btn-next-page').click(); }else {  this.form.stopPropagation(); } return false;">Next</button>
      </form>
    </div>



    <div class="survey1-paragraph hide-show" id="NA" >
      <h2 class="bolded-blue" data-i18n="litw-motivationsurvey-header-4" style="margin-top:80px"></h2>
      <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-group-p1' style="font-weight: bolder"></p>
      <ul>
        <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur2-body-YA-s1' style="font-weight: bolder"></span>
          <span class="survey1-paragraph-body" data-i18n='litw-sur2-body-YA-p1'></span>
        </li>
        <li class="content">
          <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-NA-p2' style="font-weight: bolder"></p>
        </li>
      </ul>

      <img class="survey1-img" src="../WechatIMG1017.jpg" alt="For every 100 Reddit users who made NA judgements, 43 users are very certain in NA">

      <form id="myForm3" class="form needs-validation" novalidate>
        <input type="radio" class="btn-check form-check-input" data-bs-toggle="collapse" data-bs-target="#NA-collapseExample1" aria-expanded="false" aria-controls="NA-collapseExample1"   name="NA-options" id="NA-option1" autocomplete="off" required>
        <label class="btn btn-light jud form-check-label" for="NA-option1" data-i18n='litw-sur2-body-ans-la1'></label><br>
        <input type="radio" class="btn-check form-check-input" data-bs-toggle="collapse" data-bs-target="#NA-collapseExample2" aria-expanded="false" aria-controls="NA-collapseExample2"  name="NA-options" id="NA-option2" autocomplete="off" required>
        <label class="btn btn-light jud form-check-label" for="NA-option2" data-i18n='litw-sur2-body-ans-la2'></label>

        <div class="YA-room">
          <div class="collapse" id="NA-collapseExample1">
            <div class="card-body answer">
              <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-NA-s1'></span>
            </div>
          </div>
          <div class="collapse" id="NA-collapseExample2">
            <div class="card-body answer">
              <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-NA-s2'></span>
            </div>
          </div>
        </div>


        <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur2-body-cho-p1' style="font-weight: bolder;"></p>

        <input type="radio" class="btn-check form-check-input" name="NA-decision" id="NA-option3" autocomplete="off" required>
        <label class="btn  btn-light cho2 form-check-label" for="NA-option3" data-target="#NA-ans-1" data-i18n='litw-sur2-body-cho-la1'></label>
        <input type="radio" class="btn-check form-check-input" name="NA-decision" id="NA-option4" autocomplete="off" required>
        <label class="btn  btn-light cho2 form-check-label" for="NA-option4" data-target="#NA-ans-2" data-i18n='litw-sur2-body-cho-la2'></label>
        <input type="radio" class="btn-check form-check-input" name="NA-decision" id="NA-option5" autocomplete="off" required>
        <label class="btn btn-light cho2 form-check-label" for="NA-option5" data-target="#NA-ans-3" data-i18n='litw-sur2-body-cho-la3'></label>
        <input type="radio" class="btn-check form-check-input" name="NA-decision" id="NA-option6" autocomplete="off" required>
        <label class="btn btn-light cho2 form-check-label" for="NA-option6" data-target="#NA-ans-4" data-i18n='litw-sur2-body-cho-la4'></label>
        <input type="radio" class="btn-check form-check-input" name="NA-decision" id="NA-option7" autocomplete="off" required>
        <label class="btn btn-light cho2 form-check-label" for="NA-option7" data-target="#NA-ans-5" data-i18n='litw-sur2-body-cho-la5'></label>


        <div class="survey1-paragraph-body NA-ans" id="NA-ans-1">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an1'></span>
          <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-leave' style="font-weight: bolder"></p>
        </div>
        <div class="survey1-paragraph-body NA-ans" id="NA-ans-2">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an2'></span>
          <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-leave' style="font-weight: bolder"></p>
        </div>
        <div class="survey1-paragraph-body NA-ans" id="NA-ans-3">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an3'></span>
          <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-leave' style="font-weight: bolder"></p>
        </div>
        <div class="survey1-paragraph-body NA-ans" id="NA-ans-4">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an4'></span>
          <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-leave' style="font-weight: bolder"></p>
        </div>
        <div class="survey1-paragraph-body NA-ans" id="NA-ans-5">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an5'></span>
          <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-leave' style="font-weight: bolder"></p>
        </div>
        <div class="invalid-feedback">
          Please answer the question.
        </div>

        <button type="submit" class="btn btn-secondary custom" id="sub3" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; width: auto;" onclick="if(this.form.checkValidity()) { $('#btn-next-page').click(); }else {  this.form.stopPropagation(); } return false;">Next</button>
      </form>
    </div>



  </div>
  <div style="display: block;width: 100%;height: 300px;"></div>
    
<script>
  (() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  })()

document.getElementById('option1').addEventListener('click', function() {
    const labels = document.querySelectorAll('.YA-NA');
    labels.forEach(label => {
        label.style.pointerEvents = "none"
    });
    document.getElementById('collapseExample2').classList.remove('show');
});

document.getElementById('option2').addEventListener('click', function() {
    const labels = document.querySelectorAll('.YA-NA');
    labels.forEach(label => {
        label.style.pointerEvents = "none"
    });
    document.getElementById('collapseExample1').classList.remove('show');
});


document.getElementById('YA-option1').addEventListener('click', function() {
    document.getElementById('collapseExample2').classList.remove('show');
});

document.getElementById('YA-option2').addEventListener('click', function() {
    document.getElementById('collapseExample1').classList.remove('show');
});

document.getElementById('train-option1').addEventListener('click', function() {
    document.getElementById('wrong').style.display = 'none';
    document.getElementById('train-collapseExample2').classList.remove('show');
});

document.getElementById('train-option2').addEventListener('click', function() {
    document.getElementById('train-collapseExample1').classList.remove('show');
});

document.getElementById('NA-option1').addEventListener('click', function() {
    document.getElementById('NA-collapseExample2').classList.remove('show');
});

document.getElementById('NA-option2').addEventListener('click', function() {
    document.getElementById('NA-collapseExample1').classList.remove('show');
});


    const label_YA_NA = document.querySelectorAll('.first-cho');
    label_YA_NA.forEach(labels => {
      labels.addEventListener('click', function() {
         label_YA_NA.forEach(label => {
            label.style.pointerEvents = "none"
        });
      });
    });
    
    
    const label_YA3 = document.querySelectorAll('.cho');
    label_YA3.forEach(label => {
      label.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const target = document.querySelector(targetId);
        if (target) {
          document.querySelectorAll('.YA-ans').forEach(ans => {
            ans.style.display = 'none';
          });
          target.style.display = 'block';
        }
      });
    });



    const label_NA3 = document.querySelectorAll('.cho2');
    label_NA3.forEach(label => {
      label.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const target = document.querySelector(targetId);
        if (target) {
          document.querySelectorAll('.NA-ans').forEach(ans => {
            ans.style.display = 'none';
          });
          target.style.display = 'block';
        }
      });
    });
    
    var subForm = document.getElementById('decisionForm');
    var button1  = document.getElementById('sub1');
    subForm.addEventListener('click', function() {
        if(document.getElementById('option1').checked && subForm.querySelector('input[name="decision"]:checked')){
                document.getElementById('YA').style.display = 'block';
                document.getElementById('NA').style.display = 'none';
                button1.style.display='none';
        }
        if(document.getElementById('option2').checked && subForm.querySelector('input[name="decision"]:checked')){
            document.getElementById('YA').style.display = 'none';
            document.getElementById('NA').style.display = 'block';
            button1.style.display='none';
        }
    });
</script>


`;

module.exports = template1;