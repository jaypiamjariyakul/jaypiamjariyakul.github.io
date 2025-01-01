var base_delay = 1; // 1s to load body - see "main.scss".

// Idea: zip-sort all calculated delays together & apply them in order of appearance.
const arr_delay = [];
// var component_count = $("section").length;

  /*
// First, get all possible values.
$("section").each(function(i_sel){
  // Sets limit on random() output, e.g. 8 = max 0.8s
  var max_delay = 10;
  // Adds to base_delay from page's main CSS.
  var addend = Math.round(Math.random() * max_delay) / 10;
  arr_delay.push(addend);
  // console.log("index " + i_sel + ": got delay " + addend);
});

// Ensure delays are in order - top-most components get the least delay.
arr_delay.sort();
// Assign delays to components in order.
$("section").each(function(i_sel){
  var delay_calc = base_delay + (arr_delay[i_sel]);

  delay_calc = 1; // TEMP: only cap to 1s fade

  // $(this).css({
  //   'animation' : 'fadeIn ' + delay_calc + 's ease-in'
  // });

  // console.log("transition-delay for index" + i_sel + ": " + delay_calc);
});
  */

// First, get all possible values.
$("section").each(function(i_sel){
  if ((i_sel % 2) == 1) {
    // console.log("Setting background at isel = " + i_sel);

    // $(this).css({
    //   'background' : '#061120'
    // });

    // TODO: share SCSS vars with JS?
  }

  var base_duration = 1;
  var speed_knob = 4;
  // var delay_calc = base_duration + (i_sel / speed_knob);
  var delay_calc = (i_sel / speed_knob);
  $(this).css({
    // 'animation' : 'fadeIn ' + delay_calc + 's ease-in'
    // 'animation' : 'fadeInUp ' + delay_calc + 's ease backwards',
    'animation' : 'fadeInUp ' + base_duration + 's ease backwards',
    'animation-delay' : delay_calc + 's'
  });
  // TODO: make scroll sticky iff botom of section is in view?
  console.log("transition-delay for index" + i_sel + ": " + delay_calc);
});