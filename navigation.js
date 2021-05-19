function getTree() {
  var tree = [
    {
      text: 'Parent 1',
      selectable: true,

      nodes: [
        {
          text: 'Child 1',
          nodes: [
            {
              text: 'Grandchild 1'
            },
            {
              text: 'Grandchild 2'
            }
          ]
        },
        {
          text: 'Child 2'
        }
      ]
    },
    {
      text: 'Parent 2'
    },
    {
      text: 'Parent 3'
    },
    {
      text: 'Parent 4'
    },
    {
      text: 'Parent 5'
    }
  ];
  return tree;
}

$('#tree').treeview({ data: getTree(), levels: 2 });

var toggler = document.getElementsByClassName('caret');

for (var i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener('click', function() {
    this.parentElement.querySelector('.nested').classList.toggle('active');
    $(this)
      .find('span.triangle-right')[0]
      .classList.toggle('caret-down');
    $(this)
      .find('span.triangle-right')[0]
      .classList.toggle('caret-up');
    // this.classList.toggle("caret-down");
    // this.classList.toggle("caret-up");
  });
}

function toggleLeftMenu() {
  var navBarWidth = $('#sidebar').css('width');
  navBarWidth = navBarWidth.substring(0, navBarWidth.length - 2);
  $('#sidebar').css('width', navBarWidth == '0' ? 250 : '0');
  document
    .getElementById('sidebarIcon')
    .classList.toggle('sidebar-icon-rotate');
  $('#menuTree').toggle();

  var className = $('#maintable').attr('class');
  if ($('#menuTree').is(':visible') && $('#rightMenu').is(':visible')) {
    $('#maintable').addClass('col-md-6');
  } else if ($('#menuTree').is(':visible') && !$('#rightMenu').is(':visible')) {
    $('#maintable').addClass('col-md-8');
  } else if (!$('#menuTree').is(':visible') && $('#rightMenu').is(':visible')) {
    setTimeout(() => $('#maintable').addClass('col-md-8'), 200);
  } else {
    $('#maintable').addClass('col-md-11');
  }
  $('#maintable').removeClass(className);
}

function toggleRightMenu() {
  $('#rightMenu').toggle();
  document
    .getElementById('rightSidebarIcon')
    .classList.toggle('right-sidebar-icon-rotate');
  // document.getElementById('rightSidebarIcon').classList.toggle('sidebar-icon-rotate-opp');
  // $('#maintable').removeClass();
  var className = $('#maintable').attr('class');
  if ($('#menuTree').is(':visible') && $('#rightMenu').is(':visible')) {
    $('#maintable').addClass('col-md-6');
  } else if ($('#menuTree').is(':visible') && !$('#rightMenu').is(':visible')) {
    $('#maintable').addClass('col-md-8');
  } else if (!$('#menuTree').is(':visible') && $('#rightMenu').is(':visible')) {
    $('#maintable').addClass('col-md-8');
    // setTimeout(()=>$('#maintable').addClass('col-md-8'),500);
  } else {
    $('#maintable').addClass('col-md-11');
  }
  $('#maintable').removeClass(className);
}

var menuItemList = document.getElementsByClassName('menuItem');

for (var i = 0; i < menuItemList.length; i++) {
  menuItemList[i].addEventListener('click', function() {
    if ($($(this).parent()[0]).hasClass('caret')) {
      return;
    }
    for (var j = 0; j < menuItemList.length; j++) {
      $(menuItemList[j]).removeClass('activeMenuItem');
    }
    $(this).addClass('activeMenuItem');
    if ($(this).closest('ul').length > 0) {
      if ($($(this).closest('ul')[0]).siblings('div.caret').length > 0) {
        $(
          $($($(this).closest('ul')[0]).siblings('div.caret')).children()[0]
        ).addClass('activeMenuItem');
      }
    }

    // $(this).addClass("activeMenuItem");
    console.log(this);
    // this.parentElement.querySelector(".nested").classList.toggle("active");
    // $(this).find('span.triangle-right')[0].classList.toggle("caret-down");
    // $(this).find('span.triangle-right')[0].classList.toggle("caret-up");
    // this.classList.toggle("caret-down");
    // this.classList.toggle("caret-up");
  });
}
