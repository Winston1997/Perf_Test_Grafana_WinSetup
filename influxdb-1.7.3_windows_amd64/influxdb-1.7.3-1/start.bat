@echo off
SETLOCAL

:: 获取当前批处理所在路径
SET InfluxdP==%~dp0

:: 开启influxdb服务，服务监听端口8086
echo "开启influxdb服务"
cd /d %InfluxdP=%
influxd -config influxdb.conf

ENDLOCAL