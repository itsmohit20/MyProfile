function changeTab(evt, tabName) {
    var i, tabs = ['aboutme','skills','experience'];
    for(i = 0;i<tabs.length;i++)
    {
        if(tabs[i] == tabName)
        {
            document.getElementById(tabName).classList.add('active');
            document.getElementById(tabName).classList.add('show');
            document.getElementById(tabName + "-tab").classList.add('active');
            document.getElementById(tabName + "-tab").classList.add('activeme');
            continue;
        }
        document.getElementById(tabs[i]).classList.remove('active');
        document.getElementById(tabs[i]).classList.remove('show');
        document.getElementById(tabs[i] + "-tab").classList.remove('active');
        document.getElementById(tabs[i] + "-tab").classList.remove('activeme');
    }
  }