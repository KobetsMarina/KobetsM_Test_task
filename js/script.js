const message = [
  {
    m: "Доброго дня, мене звуть Ольга Вікторівна. Я лікар вищої категорії та кандидат медичних наук, спеціалізуюсь на кардіології. Я проводжу ЕКГ та займаюся лікуванням ішемічної хвороби серця, постінфарктних станів, артеріальної гіпертензії, порушень серцевого ритму та серцевої недостатності. Ласкаво просимо до мого офіційного сайту.",
  },
  {
    m: "Тут я проводжу безкоштовну онлайн-діагностику та даю особисті рекомендації, які допомогли позбутися гіпертонії сотням жінок та чоловіків. Адже гіпертонія підступна тим, що людина довгий час залишається у невіданні щодо свого стану, не знаючи її симптомів.",
  },
  {
    m: "Щоб провести діагностику та отримати мої рекомендації щодо відновлення артеріального тиску та нормалізації роботи серця, дайте відповідь на кілька питань.",
  },
  {
    m: "Ви чоловік чи жінка? ",
  },
  {
    m: "Коли ви народилися? ",
  },
  {
    m: "У Вас є алергія на продукти харчування, ліки, пилок рослин, отруту комах?",
  },
  {
    m: "Чи є у списку один або кілька симптомів, що спостерігаються у Вас?? ",
  },
];

var msg_id = 0;
var length_msg = 0;
var lengt_num_msg = 0;
var text = "";
var process = true;
let userInfo = {};

const set = setTimeout(() => {
  const body_mas =
    '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p id="mass' +
    msg_id +
    '"></p></div></div></div>';
  $(".chat-content-list").append(body_mas);
  const mas_inf = setInterval(function () {
    if (process === true) {
      if (lengt_num_msg !== message.length) {
        text += message[lengt_num_msg].m[length_msg];
        length_msg++;
        scrollDown();
        $("#mass" + lengt_num_msg + "").html(text);
        if (
          lengt_num_msg === 3 &&
          length_msg === message[lengt_num_msg].m.length - 1
        ) {
          appGender();
          process = false;
          genderNext();
          scrollDown();

        }
        if (
          lengt_num_msg === 4 &&
          length_msg === message[lengt_num_msg].m.length - 1
        ) {
          appAge();
          process = false;
          genderNext();
          scrollDown();
        }
        if (
          lengt_num_msg === 5 &&
          length_msg === message[lengt_num_msg].m.length - 1
        ) {
          process = false;
          YsNo();
          scrollDown();
        }
        if (
          lengt_num_msg === 6 &&
          length_msg === message[lengt_num_msg].m.length - 1
        ) {
          process = false;
          photoSymptoms();
          setTimeout(() => {
            let sc_top = $("#foot1");
            $("#page_chat").animate(
              {
                scrollTop: sc_top[0].offsetTop,
              },
              500
            );
            scrollDown();
          }, 1000);
          process = false;
          YsNoSymptoms();
          scrollDown();
        }
        if (length_msg === message[lengt_num_msg].m.length) {
          scrollDown();
          lengt_num_msg++;
          msg_id++;
          length_msg = 0;
          text = "";
          app();
          let proc_scroling = lengt_num_msg - 1;
          let nev_div = $("#mass" + proc_scroling + "")[0].offsetParent
            .offsetTop;
          scrollChat(nev_div);
        }
      } else if (
        lengt_num_msg === 21
      ) {
        scrollDown();
        clearInterval(mas_inf);
        $('#mass' + lengt_num_msg + '').parent().parent().css('display', 'none');
        $('.iframe-form').css('display', 'block');
        scrollDown();
        clearInterval(set);
        showForm();
      }
    }
  }, 1);
}, 1000);

function app() {
  const body_mas =
    '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p id="mass' +
    msg_id +
    '"></p></div></div></div>';
  $(".chat-content-list").append(body_mas);
  scrollDown();
}


function myMessage(userGend) {
  let msg =
    '<div class="chat-content-item user "><div class="chat-content-desc"><div class="chat-content-desc-item user"><p>' +
    userGend +
    "</p></div></div></div>";
  $(".chat-content-list").append(msg);
  scrollDown();
}


function appGender() {
  scrollDown();
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGenderM">Чоловік</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGenderW">Жінка</span></div></div>'
  );
}

function genderNext() {
  $(".chooseGenderM").click(() => {
    document.querySelector(".chat-content-buttons-gender").style.display =
      "none";
    myMessage("Чоловік");
    userInfo.gender="Чоловік";

    setTimeout(() => {
      process = true;
    }, 500);
    scrollDown();
  });
  $(".chooseGenderW").click(() => {
    document.querySelector(".chat-content-buttons-gender").style.display =
      "none";
    myMessage("Жінка");
    userInfo.gender="Жінка";
    setTimeout(() => {
      process = true;
    }, 500);
    scrollDown();
  });
}


function appAge() {
  scrollDown();
  $(".chat-content-list").append(
    '<form name="questionForm" class="form" id="form_opr"><div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day empty_field"><option value="" selected="selected">День</option>undefined<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month empty_field"><option value="" selected="selected">Місяць</option>undefined<option value="1">січень</option><option value="2">лютий</option><option value="3">березень</option><option value="4">квітень</option><option value="5">травень</option><option value="6">червень</option><option value="7">липень</option><option value="8">серпень</option><option value="9">вересень</option><option value="10">жовтень</option><option value="11">листопад</option><option value="12">грудень</option></select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year empty_field"><option value="" selected="selected">Рік</option>undefined<option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option></select></div></div></form>'
  );

  let data = setInterval(() => {
    let empty_field = $(".select-day").val();
    let full_month = $(".select-month").val();
    let year = $(".select-year").val();
    if (empty_field !== "" && full_month !== "" && year !== "") {
      let selectS = "" + empty_field + "." + full_month + "." + year + "";

      myMessage(selectS);
      userInfo.birthday = selectS;
      $(this).css("display", "none");
      process = true;
      clearInterval(data);
    }
  }, 500);
}


function YsNo() {
  scrollDown();
  $(".chat-content-list").append(
    '<div class="chat-content-buttons"><div class="chat-content-buttons-block"><span class="choose" id="yeas">Так</span></div><div class="chat-content-buttons-block"><span class="choose" id="no">Ні</span></div></div>'
  );
  $("#yeas").click(() => {
    $(".chat-content-buttons").css("display", "none");
    myMessage("Так");
    process = true;
    scrollDown();
    userInfo.YsNoAllergy="Так";
  });
  $("#no").click(() => {
    $(".chat-content-buttons").css("display", "none");
    myMessage("Ні");
    process = true;
    scrollDown();
    userInfo.YsNoAllergy="Ні";
  });
}
function YsNoSymptoms() {
  scrollDown();
  $(".chat-content-list").append(
    '<div class="chat-content-buttons"><div class="chat-content-buttons-block"><span class="choose" id="yeasSymptoms">Так</span></div><div class="chat-content-buttons-block"><span class="choose" id="noSymptoms">Ні</span></div></div>'
  );
  $("#yeasSymptoms").click(() => {
    $(".chat-content-buttons").css("display", "none");
    myMessage("Так");
    addArray();
    process = true;
    scrollDown();
    userInfo.YsNoSymptoms="Так";
  });
  $("#noSymptoms").click(() => {
    $(".chat-content-buttons").css("display", "none");
    myMessage("Ні");
    addArray();
    process = true;
    scrollDown();
    userInfo.YsNoSymptoms="Ні";
  });
}


function photoSymptoms() {
  $(".chat-content-list").append(
    '<div class="chat-content-desc-item manager"><img class="symptomsImg" style="max-width: 625px;" src="images/symptomsFull.png" id="foot1"><img class="symptoms-mobile" src="images/symptoms.png"></div>'
  );
}


function addArray() {
  end_message1 = {
    m: 'У більшості людей з гіпертонією не виявляється жодних симптомів, тому її називають "мовчазним вбивцею". А якщо у Вас вже спостерігатися вище перелічені симптоми це сигналізує про великі проблеми із серцем.',
  };
  end_message2 = {
    m: "Підвищений кров'яний тиск є дуже небезпечним. Чим вищий кров'яний тиск, тим вищий ризик ушкодження серця або кровоносних судин в основних органах, таких як мозок чи нирки. Неконтрольована гіпертонія може призвести до інфаркту, збільшення серця і, зрештою, серцевої недостатності. У кровоносних судинах можуть розвиватися розширення (аневризми) і з'являтися вразливі місця, де судини з більшою ймовірністю можуть закупорюватися і розриватися. Тиск у кровоносних судинах може призвести до крововиливу в мозок та розвитку інсульту. Гіпертонія може також призводити до ниркової недостатності, сліпоти та когнітивних порушень.",
  };
  end_message3 = {
    m: "Перша рекомендація – вести здоровий спосіб життя та приділяти особливу увагу належному харчуванню. Також слід зменшувати споживання солі до менше ніж 5 г на день (трохи менше однієї чайної ложки).",
  };
  end_message4 = {
    m: "Друга рекомендація – керувати стресом такими здоровими способами, як медитація, належні фізичні вправи та позитивні соціальні контакти.",
  };
  end_message5 = {
    m: "У Вашому випадку обов'язково потрібно чистити судини та організм загалом. Для цього вам допоможуть витяжки з плодів глоду, квіток календули, квіток липи, листя мати-й-мачухи, трави меліси, трави собачої кропиви, трави звіробою, трави деревію, плодів софори, плодів шипшини, комплекс з 12-ти вітамінів. Це найнеобхідніші засоби, які допоможуть Вам позбутися гіпертонії.",
  };
  end_message6 = {
    m: "Для позбавлення від головного болю та відновлення тиску достатньо приймати капсули GiperoPlus 2 рази на день по 1 штуці, незалежно від прийому їжі, головне запивати великою кількістю води.",
  };
  end_message7 = {
    m: "Абсолютно кожен компонент зі складу GiperoPlus надає комплексний позитивний вплив на роботу всіх внутрішніх органів і систем. Також він знімає негативний вплив стресів і переживань, робить організм витривалішим та активнішим. Величезний перелік натуральних компонентів сприяє швидкому та дбайливому відновленню серцево-судинної системи..",
  };
  end_message8 = {
    m: "Ось так він виглядає: ",
  };
  end_message9 = {
    m: '<img src="images/offer.png">',
  };
  end_message10 = {
    m: "Оптимальна тривалість курсу, яка враховує Ваш вік, спосіб життя та поточний стан здоров'я становить від 30 днів.",
  };
  end_message11 = {
    m: "Доведено, що тривале використання показує значні результати. Ліки надають таку дію:",
  };
  end_message12 = {
    m: "- покращує хімічний склад крові; </br> - наводить рівень артеріального тиску в норму; </br> - позбавляє застійних явищ; </br> - очищає від шлаків та токсинів; </br> - позбавляє атеросклеротичних бляшок; </br> - покращує мозковий кровообіг; </br> - підвищує витривалість та активність; </br> - перешкоджає виникненню ускладнень; </br> - сприяє оздоровленню пошкоджених тканин.",
  };
  end_message13 = {
    m: "А ще у мене для Вас чудові новини. Ви пройшли онлайн-діагностику і цим стали учасником розіграшу цього препарату, який є нашим спонсором. Тільки сьогодні, у Вас є можливість отримати GiperoPlus - <span style='color: red;'>безкоштовно</span>.",
  };
  end_message14 = {
    m: "Щоб отримати GiperoPlus, впишіть своє ім'я та номер телефону у форму замовлення нижче. Ваші дані надсилаються безпосередньо виробнику, більше ніхто не має доступу до них. Вам передзвонить фахівець і після уточнення всіх необхідних деталей, того ж дня Вам буде надіслано посилку з курсом GiperoPlus.",
  };
  message.push(
    end_message1,
    end_message2,
    end_message3,
    end_message4,
    end_message5,
    end_message6,
    end_message7,
    end_message8,
    end_message9,
    end_message10,
    end_message11,
    end_message12,
    end_message13,
    end_message14
  );
}


let top_scroling = 0;

function scrollChat(x) {
  let ekac_x = x + 70;
  top_scroling += ekac_x;
  var set = setTimeout(() => {
    $("#page_chat").animate(
      {
        scrollTop: top_scroling,
      },
      1000
    );
  }, 300);
}

function showForm() {
  $(".iframe-form").addClass("show"),
    $(".btn-top").addClass("show"),
    $(".reviews").removeClass("hide");
}

function scrollDown() {
  var wrap = $(".content"),
    wrapHeight = wrap.height(),
    currentHeight = wrap.scrollTop(),
    wrapScrollHeight = wrap.prop("scrollHeight"),
    desiredHeight = wrapScrollHeight - wrapHeight;
  if (currentHeight < desiredHeight) {
    wrap.scrollTop(desiredHeight);
  }
}

$(document).ready(function () {
  $("#input-phone").inputmask(({"mask": "+38-999-9999999"}));

  $("#order_form").on( "submit", async function( e) {
    e.preventDefault();
    let formData = new FormData(e.target.closest("form"));
    formData.append('gender', userInfo.gender);
    formData.append('birthday', userInfo.birthday);
    formData.append('YsNoAllergy', userInfo.YsNoAllergy);
    formData.append('YsNoSymptoms', userInfo.YsNoSymptoms);
    try{
      let response = await fetch('/order/cpa/', {
        method: 'POST',
        body: formData,
      });

      let result = await response.json();
      console.log("Success", result);
      $("#order_form").get(0).reset();
      alert('Дякуємо за звернення!');
    }
    catch(error){
      console.log("Error", error)
      alert('Щось пішло не так, спробуйте пізніше.');
    }
    document.getElementById('order_form').reset();
  });

  $('[data-scroll]').on("click", (e) => {
    e.preventDefault();
    scrollDown();
  })
  $('.glow-button').on('click', (e)=>{
    e.preventDefault();
    const wrapper = $('#reviews');
    const showCount = 3;
    const commentCount = wrapper.find('.comment-item').length;
    const visibleCommentCount = wrapper.find('.comment-item.comment-item-show').length;
    if(commentCount > visibleCommentCount){
      wrapper.find('.comment-item:not(.comment-item-show)').each(function(i, item){
        if ( i < showCount ){
          $(item).addClass('comment-item-show');
        }
      })
      if (visibleCommentCount + showCount >= commentCount){
        $('.glow-button').hide();
      }
    }
  })
});
