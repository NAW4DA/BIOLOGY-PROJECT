(function() {
  let $animate, $container, $message, $paragraph, MESSAGES, animate, initialise, scramble;

  MESSAGES = [];

  MESSAGES.push({
    delay: 0,
    text: "Добро пожаловать!",
    className: "green-text"
  });
  
  MESSAGES.push({
    delay: 1000, // 1 секунда
    text: "Фармацевтические отходы требуют особого внимания..."
  });
  
  MESSAGES.push({
    delay: 2000, // 2 секунды
    text: "Неправильная утилизация может нанести вред окружающей среде."
  });
  
  MESSAGES.push({
    delay: 3000, // 3 секунды
    text: "Важно следовать правилам утилизации для защиты природы."
  });
  
  MESSAGES.push({
    delay: 4000, // 4 секунды
    text: "Как правильно утилизировать лекарственные средства?"
  });
  
  MESSAGES.push({
    delay: 5000, // 5 секунд
    text: "Отнесите ненужные лекарства в специальные пункты приёма."
  });
  
  MESSAGES.push({
    delay: 6000, // 6 секунд
    text: "Помогите сократить влияние фармацевтических отходов на планету."
  });
  
  MESSAGES.push({
    delay: 7000, // 7 секунд
    text: "Хотите узнать больше? Посмотрите наше видео для подробностей!",
    className: "blue-text"
  });

  $container = $("#container-message");

  $message = $("#message");

  $animate = $("#animate");

  $paragraph = null;

  scramble = function(element, text, options, className) {
    let $element, addGlitch, character, defaults, ghostCharacter, ghostCharacters, ghostLength, ghostText, ghosts, glitchCharacter, glitchCharacters, glitchIndex, glitchLength, glitchProbability, glitchText, glitches, i, j, letter, object, order, output, parameters, ref, settings, shuffle, target, textCharacters, textLength, wrap;
    defaults = {
      probability: 0.7,
      glitches: '.',
      blank: '',
      duration: text.length * 40,
      ease: 'easeInOutQuad',
      delay: 0.0
    };
    $element = $(element);
    settings = $.extend(defaults, options);
    shuffle = function() {
      if (Math.random() < 0.5) {
        return 1;
      } else {
        return -1;
      }
    };
    wrap = function(text, classes) {
      return `<span class="${classes}">${text}</span>`;
    };
    glitchText = settings.glitches;
    glitchCharacters = glitchText.split('');
    glitchLength = glitchCharacters.length;
    glitchProbability = settings.probability;
    glitches = (function() {
      let j, len, results;
      results = [];
      for (j = 0, len = glitchCharacters.length; j < len; j++) {
        letter = glitchCharacters[j];
        results.push(wrap(letter, 'glitch'));
      }
      return results;
    })();
    ghostText = $element.text();
    ghostCharacters = ghostText.split('');
    ghostLength = ghostCharacters.length;
    ghosts = (function() {
      let j, len, results;
      results = [];
      for (j = 0, len = ghostCharacters.length; j < len; j++) {
        letter = ghostCharacters[j];
        results.push(wrap(letter, 'ghost'));
      }
      return results;
    })();
    textCharacters = text.split('');
    textLength = textCharacters.length;
    order = (function() {
      let results = [];
      for (let j = 0; 0 <= textLength ? j < textLength : j > textLength; 0 <= textLength ? j++ : j--){ results.push(j); }
      return results;
    }).apply(this).sort(this.shuffle);
    output = [];
    for (i = j = 0, ref = textLength; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
      glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
      glitchCharacter = glitches[glitchIndex];
      ghostCharacter = ghosts[i] || settings.blank;
      addGlitch = Math.random() < glitchProbability;
      character = addGlitch ? glitchCharacter : ghostCharacter;
      output.push(character);
    }
    object = {
      value: 0
    };
    target = {
      value: 1
    };
    parameters = {
      duration: settings.duration,
      ease: settings.ease,
      step: function() {
        let index, k, progress, ref1;
        progress = Math.floor(object.value * (textLength - 1));
        for (i = k = 0, ref1 = progress; (0 <= ref1 ? k <= ref1 : k >= ref1); i = 0 <= ref1 ? ++k : --k) {
          index = order[i];
          output[index] = textCharacters[index];
        }
        return $element.html(output.join(''));
      },
      complete: function() {
        return $element.html(text).addClass(className);
      }
    };
    return $(object).delay(settings.delay).animate(target, parameters);
  };

  animate = function() {
    let data, element, index, j, len, options;
    for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
      data = MESSAGES[index];
      element = $paragraph.get(index);
      element.innerText = '';
      options = {
        delay: data.delay
      };
      scramble(element, data.text, options, data.className);
    }
  };

  initialise = function() {
    let index, j, len, text;
    $animate.click(animate);
    for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
      text = MESSAGES[index];
      $message.append("<p>");
    }
    $paragraph = $container.find("p");
    animate();
  };

  initialise();

}).call(this);

// CSS styles
const container = document.getElementById('containter-video-youtube');
const video = document.getElementById('youtubeVideo');

function showElements() {
  container.style.opacity = 1;
  video.style.opacity = 1;
}

setTimeout(showElements, 10000);


function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const container_category = document.querySelector('.container-category');

window.addEventListener('scroll', function() {
  if (isElementInViewport(container_category)) {
      container_category.classList.add('visible');
  }
});

const container_text = document.querySelector('.container-text');

window.addEventListener('scroll', function() {
  if (isElementInViewport(container_text)) {
      container_text.classList.add('visible');
  }
});

