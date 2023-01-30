@echo off
set serviceName1=Grafana
set serviceApp1="%cd%\grafana-8.3.3\bin\grafana-server.exe"
set serviceName2=InfluxDB
set serviceApp2="%cd%\influxdb-1.7.3_windows_amd64\influxdb-1.7.3-1\start.bat"
cls
echo.
echo.
echo "    ______            _       __        "
echo "   / ____/___  ____  (_)___  / /_       "
echo "  / __/ / __ \/ __ \/ / __ \/ __/       "
echo " / /___/ /_/ / /_/ / / / / / /_         "
echo "/_____/ .___/\____/_/_/ /_/\__/         "
echo "    _/_/        __        ____          "
echo "   /   | __  __/ /_____  /  _/___  _____"
echo "  / /| |/ / / / __/ __ \ / // __ \/ ___/"
echo " / ___ / /_/ / /_/ /_/ // // / / (__  ) "
echo "/_/  |_\__,_/\__/\____/___/_/ /_/____/  "

echo Creating Grafana service...
.\nssm.exe install Grafana %serviceApp1%
echo Starting service...
.\nssm.exe start Grafana
sc query "Grafana" |findstr /i "RUNNING" >nul &&echo Success£¬Grafana is RUNNING£¡ ||echo Starting Failed (>_<)..

echo Creating InfluxDB service...
.\nssm.exe install InfluxDB %serviceApp2%
echo Starting service...
.\nssm.exe start InfluxDB
sc query "InfluxDB" |findstr /i "RUNNING" >nul &&echo Success£¬InfluxDB is RUNNING£¡ ||echo Starting Failed (>_<)..

timeout /T 5
exit