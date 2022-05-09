const layouts = {
   en: `
    <div class="keyboard">
       <div class="row">
          <button class="button print" id="Backquote">\`</button>
          <button class="button print" id="Digit1">1</button>
          <button class="button print" id="Digit2">2</button
          ><button class="button print" id="Digit3">3</button
          ><button class="button print" id="Digit4">4</button
          ><button class="button print" id="Digit5">5</button
          ><button class="button print" id="Digit6">6</button
          ><button class="button print" id="Digit7">7</button
          ><button class="button print" id="Digit8">8</button
          ><button class="button print" id="Digit9">9</button
          ><button class="button print" id="Digit0">0</button
          ><button class="button print" id="Minus">-</button
          ><button class="button print" id="Equal">=</button
          ><button class="button backspace" id="Backspace">Backspace</button>
       </div>
       <div class="row">
          <button class="button tab" id="Tab">Tab</button
          ><button class="button print" id="KeyQ">q</button
          ><button class="button print" id="KeyW">w</button
          ><button class="button print" id="KeyE">e</button
          ><button class="button print" id="KeyR">r</button
          ><button class="button print" id="KeyT">t</button
          ><button class="button print" id="KeyY">y</button
          ><button class="button print" id="KeyU">u</button
          ><button class="button print" id="KeyI">i</button
          ><button class="button print" id="KeyO">o</button
          ><button class="button print" id="KeyP">p</button
          ><button class="button print" id="BracketLeft">[</button
          ><button class="button print" id="BracketRight">]</button
          ><button class="button print" id="Backslash">\\</button
          ><button class="button del" id="Delete">Del</button>
       </div>
       <div class="row">
          <button class="button capslock" id="CapsLock">Caps</button
          ><button class="button print" id="KeyA">a</button
          ><button class="button print" id="KeyS">s</button
          ><button class="button print" id="KeyD">d</button
          ><button class="button print" id="KeyF">f</button
          ><button class="button print" id="KeyG">g</button
          ><button class="button print" id="KeyH">h</button
          ><button class="button print" id="KeyJ">j</button
          ><button class="button print" id="KeyK">k</button
          ><button class="button print" id="KeyL">l</button
          ><button class="button print" id="Semicolon">;</button
          ><button class="button print" id="Quote">'</button
          ><button class="button enter" id="Enter">Enter</button>
       </div>
       <div class="row">
          <button class="button shift" id="ShiftLeft">Shift</button
          ><button class="button print" id="KeyZ">z</button
          ><button class="button print" id="KeyX">x</button
          ><button class="button print" id="KeyC">c</button
          ><button class="button print" id="KeyV">v</button
          ><button class="button print" id="KeyB">b</button
          ><button class="button print" id="KeyN">n</button
          ><button class="button print" id="KeyM">m</button
          ><button class="button print" id="Comma">,</button
          ><button class="button print" id="Period">.</button
          ><button class="button print" id="Slash">/</button
          ><button class="button print" id="ArrowUp">▲</button
          ><button class="button shift" id="ShiftRight">Shift</button>
       </div>
       <div class="row">
          <button class="button ctrl" id="ControlLeft">Ctrl</button
          ><button class="button alt" id="AltLeft">Alt</button
          ><button class="button space" id="Space"> </button
          ><button class="button alt" id="AltRight">Alt</button
          ><button class="button print" id="ArrowLeft">◄</button
          ><button class="button print" id="ArrowDown">▼</button
          ><button class="button print" id="ArrowRight">►</button
          ><button class="button ctrl" id="ControlRight">Ctrl</button>
       </div>
    </div>
 `,
   ru: `
       <div class="keyboard">
          <div class="row">
             <button class="button print" id="Backquote">ё</button
             ><button class="button print" id="Digit1">1</button
             ><button class="button print" id="Digit2">2</button
             ><button class="button print" id="Digit3">3</button
             ><button class="button print" id="Digit4">4</button
             ><button class="button print" id="Digit5">5</button
             ><button class="button print" id="Digit6">6</button
             ><button class="button print" id="Digit7">7</button
             ><button class="button print" id="Digit8">8</button
             ><button class="button print" id="Digit9">9</button
             ><button class="button print" id="Digit0">0</button
             ><button class="button print" id="Minus">-</button
             ><button class="button print" id="Equal">=</button
             ><button class="button backspace" id="Backspace">Backspace</button>
          </div>
          <div class="row">
             <button class="button tab" id="Tab">Tab</button
             ><button class="button print" id="KeyQ">й</button
             ><button class="button print" id="KeyW">ц</button
             ><button class="button print" id="KeyE">у</button
             ><button class="button print" id="KeyR">к</button
             ><button class="button print" id="KeyT">е</button
             ><button class="button print" id="KeyY">н</button
             ><button class="button print" id="KeyU">г</button
             ><button class="button print" id="KeyI">ш</button
             ><button class="button print" id="KeyO">щ</button
             ><button class="button print" id="KeyP">з</button
             ><button class="button print" id="BracketLeft">х</button
             ><button class="button print" id="BracketRight">ъ</button
             ><button class="button print" id="Backslash">\\</button
             ><button class="button del" id="Delete">Del</button>
          </div>
          <div class="row">
             <button class="button capslock" id="CapsLock">Caps</button
             ><button class="button print" id="KeyA">ф</button
             ><button class="button print" id="KeyS">ы</button
             ><button class="button print" id="KeyD">в</button
             ><button class="button print" id="KeyF">а</button
             ><button class="button print" id="KeyG">п</button
             ><button class="button print" id="KeyH">р</button
             ><button class="button print" id="KeyJ">о</button
             ><button class="button print" id="KeyK">л</button
             ><button class="button print" id="KeyL">д</button
             ><button class="button print" id="Semicolon">ж</button
             ><button class="button print" id="Quote">э</button
             ><button class="button enter" id="Enter">Enter</button>
          </div>
          <div class="row">
             <button class="button shift" id="ShiftLeft">Shift</button
             ><button class="button print" id="KeyZ">я</button
             ><button class="button print" id="KeyX">ч</button
             ><button class="button print" id="KeyC">с</button
             ><button class="button print" id="KeyV">м</button
             ><button class="button print" id="KeyB">и</button
             ><button class="button print" id="KeyN">т</button
             ><button class="button print" id="KeyM">ь</button
             ><button class="button print" id="Comma">б</button
             ><button class="button print" id="Period">ю</button
             ><button class="button print" id="Slash">.</button
             ><button class="button print" id="ArrowUp">▲</button
             ><button class="button shift" id="ShiftRight">Shift</button>
          </div>
          <div class="row">
             <button class="button ctrl" id="ControlLeft">Ctrl</button
             ><button class="button alt" id="AltLeft">Alt</button
             ><button class="button space" id="Space"> </button
             ><button class="button alt" id="AltRight">Alt</button
             ><button class="button arrow arrow--left" id="ArrowLeft">◄</button
             ><button class="button print" id="ArrowDown">▼</button
             ><button class="button print" id="ArrowRight">►</button
             ><button class="button ctrl" id="ControlRight">Ctrl</button>
          </div>
       </div>
    `,
   EN: `
       <div class="keyboard">
          <div class="row">
             <button class="button print" id="Backquote">~</button
             ><button class="button print" id="Digit1">!</button
             ><button class="button print" id="Digit2">@</button
             ><button class="button print" id="Digit3">#</button
             ><button class="button print" id="Digit4">$</button
             ><button class="button print" id="Digit5">%</button
             ><button class="button print" id="Digit6">^</button
             ><button class="button print" id="Digit7">&</button
             ><button class="button print" id="Digit8">*</button
             ><button class="button print" id="Digit9">(</button
             ><button class="button print" id="Digit0">)</button
             ><button class="button print" id="Minus">_</button
             ><button class="button print" id="Equal">+</button
             ><button class="button backspace" id="Backspace">Backspace</button>
          </div>
          <div class="row">
             <button class="button tab" id="Tab">Tab</button
             ><button class="button print" id="KeyQ">Q</button
             ><button class="button print" id="KeyW">W</button
             ><button class="button print" id="KeyE">E</button
             ><button class="button print" id="KeyR">R</button
             ><button class="button print" id="KeyT">T</button
             ><button class="button print" id="KeyY">Y</button
             ><button class="button print" id="KeyU">U</button
             ><button class="button print" id="KeyI">I</button
             ><button class="button print" id="KeyO">O</button
             ><button class="button print" id="KeyP">P</button
             ><button class="button print" id="BracketLeft">{</button
             ><button class="button print" id="BracketRight">}</button
             ><button class="button print" id="Backslash">|</button
             ><button class="button del" id="Delete">Del</button>
          </div>
          <div class="row">
             <button class="button capslock id="CapsLock"">Caps</button
             ><button class="button print" id="KeyA">A</button
             ><button class="button print" id="KeyS">S</button
             ><button class="button print" id="KeyD">D</button
             ><button class="button print" id="KeyF">F</button
             ><button class="button print" id="KeyG">G</button
             ><button class="button print" id="KeyH">H</button
             ><button class="button print" id="KeyJ">J</button
             ><button class="button print" id="KeyK">K</button
             ><button class="button print" id="KeyL">L</button
             ><button class="button print" id="Semicolon">:</button
             ><button class="button print" id="Quote">"</button
             ><button class="button enter" id="Enter">Enter</button>
          </div>
          <div class="row">
             <button class="button shift" id="ShiftLeft">Shift</button
             ><button class="button print" id="KeyZ">Z</button
             ><button class="button print" id="KeyX">X</button
             ><button class="button print" id="KeyC">C</button
             ><button class="button print" id="KeyV">V</button
             ><button class="button print" id="KeyB">B</button
             ><button class="button print" id="KeyN">N</button
             ><button class="button print" id="KeyM">M</button
             ><button class="button print" id="Comma"><</button
             ><button class="button print" id="Period">></button
             ><button class="button print" id="Slash">?</button
             ><button class="button arrow arrow--up" id="ArrowUp">▲</button
             ><button class="button shift" id="ShiftRight">Shift</button>
          </div>
          <div class="row">
             <button class="button ctrl" id="ControlLeft">Ctrl</button
             ><button class="button alt" id="AltLeft">Alt</button
             ><button class="button space" id="Space"> </button
             ><button class="button alt" id="AltRight">Alt</button
             ><button class="button print" id="ArrowLeft">◄</button
             ><button class="button print" id="ArrowDown">▼</button
             ><button class="button print" id="ArrowRight">►</button
             ><button class="button ctrl" id="ControlRight">Ctrl</button>
          </div>
       </div>
    `,
   RU: `
       <div class="keyboard">
          <div class="row">
             <button class="button print" id="Backquote">Ё</button
             ><button class="button print" id="Digit1">!</button
             ><button class="button print" id="Digit2">"</button
             ><button class="button print" id="Digit3">№</button
             ><button class="button print" id="Digit4">;</button
             ><button class="button print" id="Digit5">%</button
             ><button class="button print" id="Digit6">:</button
             ><button class="button print" id="Digit7">?</button
             ><button class="button print" id="Digit8">*</button
             ><button class="button print" id="Digit9">(</button
             ><button class="button print" id="Digit0">)</button
             ><button class="button print" id="Minus">_</button
             ><button class="button print" id="Equal">+</button
             ><button class="button backspace" id="Backspace">Backspace</button>
          </div>
          <div class="row">
             <button class="button tab" id="Tab">Tab</button
             ><button class="button print" id="KeyQ">Й</button
             ><button class="button print" id="KeyW">Ц</button
             ><button class="button print" id="KeyE">У</button
             ><button class="button print" id="KeyR">К</button
             ><button class="button print" id="KeyT">Е</button
             ><button class="button print" id="KeyY">Н</button
             ><button class="button print" id="KeyU">Г</button
             ><button class="button print" id="KeyI">Ш</button
             ><button class="button print" id="KeyO">Щ</button
             ><button class="button print" id="KeyP">З</button
             ><button class="button print" id="BracketLeft">Х</button
             ><button class="button print" id="BracketRight">Ъ</button
             ><button class="button print" id="Backslash">/</button
             ><button class="button del" id="Delete">Del</button>
          </div>
          <div class="row">
             <button class="button capslock" id="CapsLock">Caps</button
             ><button class="button print" id="KeyA">Ф</button
             ><button class="button print" id="KeyS">Ы</button
             ><button class="button print" id="KeyD">В</button
             ><button class="button print" id="KeyF">А</button
             ><button class="button print" id="KeyG">П</button
             ><button class="button print" id="KeyH">Р</button
             ><button class="button print" id="KeyJ">О</button
             ><button class="button print" id="KeyK">Л</button
             ><button class="button print" id="KeyL">Д</button
             ><button class="button print" id="Semicolon">Ж</button
             ><button class="button print" id="Quote">Э</button
             ><button class="button enter" id="Enter">Enter</button>
          </div>
          <div class="row">
             <button class="button shift" id="ShiftLeft">Shift</button
             ><button class="button print" id="KeyZ">Я</button
             ><button class="button print" id="KeyX">Ч</button
             ><button class="button print" id="KeyC">С</button
             ><button class="button print" id="KeyV">М</button
             ><button class="button print" id="KeyB">И</button
             ><button class="button print" id="KeyN">Т</button
             ><button class="button print" id="KeyM">Ь</button
             ><button class="button print" id="Comma">Б</button
             ><button class="button print" id="Period">Ю</button
             ><button class="button print" id="Slash">.</button
             ><button class="button arrow arrow--up" id="ArrowUp">▲</button
             ><button class="button shift" id="ShiftRight">Shift</button>
          </div>
          <div class="row">
             <button class="button ctrl" id="ControlLeft">Ctrl</button
             ><button class="button alt" id="AltLeft">Alt</button
             ><button class="button space" id="Space"> </button
             ><button class="button alt" id="AllRight">Alt</button
             ><button class="button arrow arrow--left" id="ArrowLeft">◄</button
             ><button class="button print id="ArrowDown"">▼</button
             ><button class="button print id="ArrowRight"">►</button
             ><button class="button ctrl id="ControlRight"">Ctrl</button>
          </div>
       </div>
    `,
   CapsEN: `
    <div class="keyboard">
       <div class="row">
          <button class="button print" id="Backquote">\`</button
          ><button class="button print" id="Digit1">1</button
          ><button class="button print" id="Digit2">2</button
          ><button class="button print" id="Digit3">3</button
          ><button class="button print" id="Digit4">4</button
          ><button class="button print" id="Digit5">5</button
          ><button class="button print" id="Digit6">6</button
          ><button class="button print" id="Digit7">7</button
          ><button class="button print" id="Digit8">8</button
          ><button class="button print" id="Digit9">9</button
          ><button class="button print" id="Digit0">0</button
          ><button class="button print" id="Minus">-</button
          ><button class="button print" id="Equal">=</button
          ><button class="button backspace" id="Backspace">Backspace</button>
       </div>
       <div class="row">
          <button class="button tab" id="Tab">Tab</button
          ><button class="button print" id="KeyQ">Q</button
          ><button class="button print" id="KeyW">W</button
          ><button class="button print" id="KeyE">E</button
          ><button class="button print" id="KeyR">R</button
          ><button class="button print" id="KeyT">T</button
          ><button class="button print" id="KeyY">Y</button
          ><button class="button print" id="KeyU">U</button
          ><button class="button print" id="KeyI">I</button
          ><button class="button print" id="KeyO">O</button
          ><button class="button print" id="KeyP">P</button
          ><button class="button print" id="BracketLeft">[</button
          ><button class="button print" id="BracketRight">]</button
          ><button class="button print" id="Backslash">\\</button
          ><button class="button del" id="Delete">Del</button>
       </div>
       <div class="row">
          <button class="button capslock active" id="CapsLock">Caps</button
          ><button class="button print" id="KeyA">A</button
          ><button class="button print" id="KeyS">S</button
          ><button class="button print" id="KeyD">D</button
          ><button class="button print" id="KeyF">F</button
          ><button class="button print" id="KeyG">G</button
          ><button class="button print" id="KeyH">H</button
          ><button class="button print" id="KeyJ">J</button
          ><button class="button print" id="KeyK">K</button
          ><button class="button print" id="KeyL">L</button
          ><button class="button print" id="Semicolon">;</button
          ><button class="button print" id="Quote">'</button
          ><button class="button enter" id="Enter">Enter</button>
       </div>
       <div class="row">
          <button class="button shift" id="ShiftLeft">Shift</button
          ><button class="button print" id="KeyZ">Z</button
          ><button class="button print" id="KeyX">X</button
          ><button class="button print" id="KeyC">C</button
          ><button class="button print" id="KeyV">V</button
          ><button class="button print" id="KeyB">B</button
          ><button class="button print" id="KeyN">N</button
          ><button class="button print" id="KeyM">M</button
          ><button class="button print" id="Comma">,</button
          ><button class="button print" id="Period">.</button
          ><button class="button print" id="Slash">/</button
          ><button class="button arrow arrow--up" id="ArrowUp">▲</button
          ><button class="button shift" id="ShiftRight">Shift</button>
       </div>
       <div class="row">
          <button class="button ctrl" id="ControlLeft">Ctrl</button
          ><button class="button alt" id="AltLeft">Alt</button
          ><button class="button space" id="Space"> </button
          ><button class="button alt" id="AltRight">Alt</button
          ><button class="button arrow arrow--left" id="ArrowLeft">◄</button
          ><button class="button print" id="ArrowDown">▼</button
          ><button class="button print" id="ArrowRight">►</button
          ><button class="button ctrl" id="ControlRight">Ctrl</button>
       </div>
    </div>
 `,
   CapsRU: `
       <div class="keyboard">
          <div class="row">
             <button class="button print" id="Backquote">Ё</button
             ><button class="button print" id="Digit1">1</button
             ><button class="button print" id="Digit2">2</button
             ><button class="button print" id="Digit3">3</button
             ><button class="button print" id="Digit4">4</button
             ><button class="button print" id="Digit5">5</button
             ><button class="button print" id="Digit6">6</button
             ><button class="button print" id="Digit7">7</button
             ><button class="button print" id="Digit8">8</button
             ><button class="button print" id="Digit9">9</button
             ><button class="button print" id="Digit0">0</button
             ><button class="button print" id="Minus">-</button
             ><button class="button print" id="Equal">=</button
             ><button class="button backspace" id="Backspace">Backspace</button>
          </div>
          <div class="row">
             <button class="button tab" id="Tab">Tab</button
             ><button class="button print" id="KeyQ">Й</button
             ><button class="button print" id="KeyW">Ц</button
             ><button class="button print" id="KeyE">У</button
             ><button class="button print" id="KeyR">К</button
             ><button class="button print" id="KeyT">Е</button
             ><button class="button print" id="KeyY">Н</button
             ><button class="button print" id="KeyU">Г</button
             ><button class="button print" id="KeyI">Ш</button
             ><button class="button print" id="KeyO">Щ</button
             ><button class="button print" id="KeyP">З</button
             ><button class="button print" id="BracketLeft">Х</button
             ><button class="button print" id="BracketRight">Ъ</button
             ><button class="button print" id="Backslash">\\</button
             ><button class="button del" id="Delete">Del</button>
          </div>
          <div class="row">
             <button class="button capslock active" id="CapsLock">Caps</button
             ><button class="button print" id="KeyA">Ф</button
             ><button class="button print" id="KeyS">Ы</button
             ><button class="button print" id="KeyD">В</button
             ><button class="button print" id="KeyF">А</button
             ><button class="button print" id="KeyG">П</button
             ><button class="button print" id="KeyH">Р</button
             ><button class="button print" id="KeyJ">О</button
             ><button class="button print" id="KeyK">Л</button
             ><button class="button print" id="KeyL">Д</button
             ><button class="button print" id="Semicolon">Ж</button
             ><button class="button print" id="Quote">Э</button
             ><button class="button enter" id="Enter">Enter</button>
          </div>
          <div class="row">
             <button class="button shift" id="ShiftLeft">Shift</button
             ><button class="button print" id="KeyZ">Я</button
             ><button class="button print" id="KeyX">Ч</button
             ><button class="button print" id="KeyC">С</button
             ><button class="button print" id="KeyV">М</button
             ><button class="button print" id="KeyB">И</button
             ><button class="button print" id="KeyN">Т</button
             ><button class="button print" id="KeyM">Ь</button
             ><button class="button print" id="Comma">Б</button
             ><button class="button print" id="Period">Ю</button
             ><button class="button print" id="Slash">.</button
             ><button class="button arrow arrow--up" id="ArrowUp">▲</button
             ><button class="button shift" id="ShiftRight">Shift</button>
          </div>
          <div class="row">
             <button class="button ctrl" id="ControlLeft">Ctrl</button
             ><button class="button alt" id="AltLeft">Alt</button
             ><button class="button space" id="Space"> </button
             ><button class="button alt" id="AltRight">Alt</button
             ><button class="button arrow arrow--left" id="ArrowLeft">◄</button
             ><button class="button print" id="ArrowDown">▼</button
             ><button class="button print" id="ArrowRight">►</button
             ><button class="button ctrl" id="ControlRight">Ctrl</button>
          </div>
       </div>
    `,
   ENShift: `
    <div class="keyboard">
       <div class="row">
          <button class="button print" id="Backquote">~</button
          ><button class="button print" id="Digit1">!</button
          ><button class="button print" id="Digit2">@</button
          ><button class="button print" id="Digit3">#</button
          ><button class="button print" id="Digit4">$</button
          ><button class="button print" id="Digit5">%</button
          ><button class="button print" id="Digit6">^</button
          ><button class="button print" id="Digit7">&</button
          ><button class="button print" id="Digit8">*</button
          ><button class="button print" id="Digit9">(</button
          ><button class="button print" id="Digit0">)</button
          ><button class="button print" id="Minus">_</button
          ><button class="button print" id="Equal">+</button
          ><button class="button backspace" id="Backspace">Backspace</button>
       </div>
       <div class="row">
          <button class="button tab" id="Tab">Tab</button
          ><button class="button print" id="KeyQ">q</button
          ><button class="button print" id="KeyW">w</button
          ><button class="button print" id="KeyE">e</button
          ><button class="button print" id="KeyR">r</button
          ><button class="button print" id="KeyT">t</button
          ><button class="button print" id="KeyY">y</button
          ><button class="button print" id="KeyU">u</button
          ><button class="button print" id="KeyI">i</button
          ><button class="button print" id="KeyO">o</button
          ><button class="button print" id="KeyP">p</button
          ><button class="button print" id="BracketLeft">{</button
          ><button class="button print" id="BracketRight">}</button
          ><button class="button print" id="Backslash">|</button
          ><button class="button del" id="Delete">Del</button>
       </div>
       <div class="row">
          <button class="button capslock active" id="CapsLock">Caps</button
          ><button class="button print" id="KeyA">a</button
          ><button class="button print" id="KeyS">s</button
          ><button class="button print" id="KeyD">d</button
          ><button class="button print" id="KeyF">f</button
          ><button class="button print" id="KeyG">g</button
          ><button class="button print" id="KeyH">h</button
          ><button class="button print" id="KeyJ">j</button
          ><button class="button print" id="KeyK">k</button
          ><button class="button print" id="KeyL">l</button
          ><button class="button print" id="Semicolon">:</button
          ><button class="button print" id="Quote">"</button
          ><button class="button enter" id="Enter">Enter</button>
       </div>
       <div class="row">
          <button class="button shift" id="ShiftLeft">Shift</button
          ><button class="button print" id="KeyZ">z</button
          ><button class="button print" id="KeyX">x</button
          ><button class="button print" id="KeyC">c</button
          ><button class="button print" id="KeyV">v</button
          ><button class="button print" id="KeyB">b</button
          ><button class="button print" id="KeyN">n</button
          ><button class="button print" id="KeyM">m</button
          ><button class="button print" id="Comma"><</button
          ><button class="button print" id="Period">></button
          ><button class="button print" id="Slash">?</button
          ><button class="button arrow arrow--up" id="ArrowUp">▲</button
          ><button class="button shift" id="ShiftRight">Shift</button>
       </div>
       <div class="row">
          <button class="button ctrl" id="ControlLeft">Ctrl</button
          ><button class="button alt" id="AltLeft">Alt</button
          ><button class="button space" id="Space"> </button
          ><button class="button alt" id="AltRight">Alt</button
          ><button class="button arrow arrow--left" id="ArrowLeft">◄</button
          ><button class="button print" id="ArrowDown">▼</button
          ><button class="button print" id="ArrowRight">►</button
          ><button class="button ctrl" id="ControlRight">Ctrl</button>
       </div>
    </div>
 `,
   RUShift: `
       <div class="keyboard">
          <div class="row">
             <button class="button print" id="Backquote">ё</button
             ><button class="button print" id="Digit1">!</button
             ><button class="button print" id="Digit2">"</button
             ><button class="button print" id="Digit3">№</button
             ><button class="button print" id="Digit4">;</button
             ><button class="button print" id="Digit5">%</button
             ><button class="button print" id="Digit6">:</button
             ><button class="button print" id="Digit7">?</button
             ><button class="button print" id="Digit8">*</button
             ><button class="button print" id="Digit9">(</button
             ><button class="button print" id="Digit0">)</button
             ><button class="button print" id="Minus">_</button
             ><button class="button print" id="Equal">+</button
             ><button class="button backspace" id="Backspace">Backspace</button>
          </div>
          <div class="row">
             <button class="button tab" id="Tab">Tab</button
             ><button class="button print" id="KeyQ">й</button
             ><button class="button print" id="KeyW">ц</button
             ><button class="button print" id="KeyE">у</button
             ><button class="button print" id="KeyR">к</button
             ><button class="button print" id="KeyT">е</button
             ><button class="button print" id="KeyY">н</button
             ><button class="button print" id="KeyU">г</button
             ><button class="button print" id="KeyI">ш</button
             ><button class="button print" id="KeyO">щ</button
             ><button class="button print" id="KeyP">з</button
             ><button class="button print" id="BracketLeft">х</button
             ><button class="button print" id="BracketRight">ъ</button
             ><button class="button print" id="Backslash">/</button
             ><button class="button del" id="Delete">Del</button>
          </div>
          <div class="row">
             <button class="button capslock active" id="CapsLock">Caps</button
             ><button class="button print" id="KeyA">ф</button
             ><button class="button print" id="KeyS">ы</button
             ><button class="button print" id="KeyD">в</button
             ><button class="button print" id="KeyF">а</button
             ><button class="button print" id="KeyG">п</button
             ><button class="button print" id="KeyH">р</button
             ><button class="button print" id="KeyJ">о</button
             ><button class="button print" id="KeyK">л</button
             ><button class="button print" id="KeyL">д</button
             ><button class="button print" id="Semicolon">ж</button
             ><button class="button print" id="Quote">э</button
             ><button class="button enter" id="Enter">Enter</button>
          </div>
          <div class="row">
             <button class="button shift" id="ShiftLeft">Shift</button
             ><button class="button print" id="KeyZ">я</button
             ><button class="button print" id="KeyX">ч</button
             ><button class="button print" id="KeyC">с</button
             ><button class="button print" id="KeyV">м</button
             ><button class="button print" id="KeyB">и</button
             ><button class="button print" id="KeyN">т</button
             ><button class="button print" id="KeyM">ь</button
             ><button class="button print" id="Comma">б</button
             ><button class="button print" id="Period">ю</button
             ><button class="button print" id="Slash">,</button
             ><button class="button arrow arrow--up" id="ArrowUp">▲</button
             ><button class="button shift" id="ShiftRight">Shift</button>
          </div>
          <div class="row">
             <button class="button ctrl" id="ControlLeft">Ctrl</button
             ><button class="button alt" id="AltLeft">Alt</button
             ><button class="button space" id="Space"> </button
             ><button class="button alt" id="AltRight">Alt</button
             ><button class="button arrow arrow--left" id="ArrowLeft">◄</button
             ><button class="button print" id="ArrowDown">▼</button
             ><button class="button print" id="ArrowRight">►</button
             ><button class="button ctrl" id="ControlRight">Ctrl</button>
          </div>
       </div>
    `,
 };
 
  let body = document.querySelector('body');

  const createWrapper = () => {
  const wrapper = '<div class="wrapper"></div>';
  body.insertAdjacentHTML('afterbegin', wrapper);
};
 createWrapper();

const createTextarea = (lang) => {
  const wrapper = body.querySelector('.wrapper');
  const textarea = `<textarea class="textarea ${lang}"></textarea>`;
  wrapper.insertAdjacentHTML('afterbegin', textarea);
};

const createKeyboard = (layout) => {
  const wrapper = body.querySelector('.wrapper');
  const keyboard = wrapper.querySelector('.keyboard');
  if (keyboard) wrapper.removeChild(keyboard);
  wrapper.insertAdjacentHTML('beforeend', layout);
};

const createDescription = () => {
  const description = `
   <div class="description">
   <p>Клавиатура создана в операционной системе Windows</p>
   <p>Для переключения языка используйте Ctrl + Alt</p>
   </div>`;
  const wrapper = body.querySelector('.wrapper');
  wrapper.insertAdjacentHTML('afterbegin', description);
};
createDescription();

if (localStorage.layout) {
  createTextarea(`textarea--${localStorage.getItem('layout')}`);
  createKeyboard(layouts[localStorage.getItem('layout')]);
} else {
  localStorage.setItem('layout', 'en');
  createTextarea(`textarea--${localStorage.getItem('layout')}`);
  createKeyboard(layouts[localStorage.getItem('layout')]);
}



let keyboard = document.querySelector('.keyboard');
let textarea = document.querySelector('.textarea');
let buttons = document.querySelectorAll('.button');

const createText = (text) => {
  const { value } = textarea;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  textarea.value = value.slice(0, start) + text + value.slice(end);
  textarea.selectionStart = start + 1;
  textarea.selectionEnd = start + 1;
};

const layoutKeyboard = (layout) => {
  createKeyboard(layout);
  keyboard = document.querySelector('.keyboard');
  buttons = keyboard.querySelectorAll('.button');
  addClickListener(keyboard);
};

const addClickListener = (k) => {
  k.addEventListener('mousedown', (event) => {
    buttons.forEach((button) => {
      if (event.target.closest('.capslock') === button) {
        textarea.classList.toggle('textarea--caps');
        if (textarea.classList.contains('textarea--caps')) {
          if (textarea.classList.contains('textarea--ru')) {
            layoutKeyboard(layouts.CapsRU);
          } else layoutKeyboard(layouts.CapsEN);
        } else if (textarea.classList.contains('textarea--ru')) {
          layoutKeyboard(layouts.ru);
        } else {
          layoutKeyboard(layouts.en);
        }
      }

      if (event.target.closest('.shift') === button) {
        if (textarea.classList.contains('textarea--ru')) {
          textarea.classList.contains('textarea--caps') ? layoutKeyboard(layouts.RUShift) : layoutKeyboard(layouts.RU);
        } else {
          textarea.classList.contains('textarea--caps') ? layoutKeyboard(layouts.ENShift) : layoutKeyboard(layouts.EN);
        }
      }

      if (event.target.closest('.backspace') === button) {
        const { value } = textarea;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) {
          if (start > 0) {
            textarea.value = value.slice(0, start - 1) + value.slice(end);
            textarea.selectionStart = start - 1;
            textarea.selectionEnd = start - 1;
          }
        } else {
          textarea.value = value.slice(0, start) + value.slice(end);
          textarea.selectionStart = start;
          textarea.selectionEnd = start;
        }
      }

      if (event.target.closest('.del') === button) {
        const { value } = textarea;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        
        if (start === end) {
          textarea.value = value.slice(0, start) + value.slice(end + 1);
        }
        else {
          textarea.value = value.slice(0, start) + value.slice(end);
        }
        textarea.selectionStart = start;
        textarea.selectionEnd = start;
      }
      if (event.target.closest('.enter') === button) createText('\n');
      if (event.target.closest('.space') === button) createText(' ');
      if (event.target.closest('.tab') === button) createText('\t');
      if (event.target.closest('.print') === button) {createText(button.innerText);}
    });
  });
  keyboard.addEventListener('mouseup', (event) => {
    buttons.forEach((button) => {
      if (event.target.closest('.shift') === button) {
        if (textarea.classList.contains('textarea--ru')) {
          textarea.classList.contains('textarea--caps') ? layoutKeyboard(layouts.CapsRU) : layoutKeyboard(layouts.ru);
        } else {
          textarea.classList.contains('textarea--caps') ? layoutKeyboard(layouts.CapsEN) : layoutKeyboard(layouts.en);
        }
      }
      textarea.focus();
    });
  });
};
addClickListener(keyboard);

const Handler = (event) => {
  textarea.focus();
  buttons.forEach((button) => {
    if (event.code === button.id) button.classList.add('active');
  });
  if (event.code === 'CapsLock') {
    textarea.classList.toggle('textarea--caps');
    if (textarea.classList.contains('textarea--caps')) {
      if (textarea.classList.contains('textarea--ru')) {
        layoutKeyboard(layouts.CapsRU);
      } else layoutKeyboard(layouts.CapsEN);
    } else if (textarea.classList.contains('textarea--ru')) {
      layoutKeyboard(layouts.ru);
    } else {
      layoutKeyboard(layouts.en);
    }
    window.removeEventListener('keydown', Handler);
  }
  if (event.key === 'Shift') {
    if (textarea.classList.contains('textarea--ru')) {
      textarea.classList.contains('textarea--caps') ? layoutKeyboard(layouts.RUShift) : layoutKeyboard(layouts.RU);
    } else {
      textarea.classList.contains('textarea--caps') ? layoutKeyboard(layouts.ENShift) : layoutKeyboard(layouts.EN);
    }

    window.removeEventListener('keydown', Handler);
    event.code === 'ShiftLeft' ? keyboard.querySelector('#ShiftLeft').classList.add('active') : keyboard.querySelector('#ShiftRight').classList.add('active');
  }
  
  if (event.key === 'Alt') {
    event.preventDefault();
    event.code === 'AltLeft' ? keyboard.querySelector('#AltLeft').classList.add('active') : keyboard.querySelector('#AltRight').classList.add('active');
  }

  if (event.code === 'Tab') {
    event.preventDefault();
    createText('\t');
  }

  if (event.ctrlKey && event.altKey) {
    textarea.classList.toggle('textarea--ru');
    textarea.classList.toggle('textarea--en');
    if (textarea.classList.contains('textarea--ru')) {
      textarea.classList.contains('textarea--caps') ? layoutKeyboard(layouts.CapsRU) : layoutKeyboard(layouts.ru);
      localStorage.setItem('layout', 'ru');
    } else {
      textarea.classList.contains('textarea--caps') ? layoutKeyboard(layouts.CapsEN) : layoutKeyboard(layouts.en);
      localStorage.setItem('layout', 'en');
    }
  }
};

const capsHandler = (event) => {
  buttons.forEach((button) => {
    if (event.code === button.id && button.id !== 'CapsLock') {
      button.classList.remove('active');
    }
  });
  if (event.key === 'Shift') {
    if (textarea.classList.contains('textarea--ru')) {
      textarea.classList.contains('textarea--caps') ? layoutKeyboard(layouts.CapsRU) : layoutKeyboard(layouts.ru);
    } else {
      textarea.classList.contains('textarea--caps') ? layoutKeyboard(layouts.CapsEN) : layoutKeyboard(layouts.en);
    }
  }
  window.addEventListener('keydown', Handler);
};

const clickHandler = (event) => {
  event.preventDefault();
  textarea.focus();
  buttons.forEach((button) => {
    if (event.code === button.id) {
      if (button.id === 'Enter') createText('\n');
      else if (button.id === 'Space') createText(' ');
      else createText(button.innerText);
    }
  });
};

window.addEventListener('keydown', Handler);
window.addEventListener('keyup', capsHandler);
window.addEventListener('keypress', clickHandler);