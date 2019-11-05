This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 安装Docker CentOS

#### 安装所需的软件包。
```yaml
  yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```
#### 使用以下命令来设置稳定的仓库。
```yaml
  yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

#### 安装最新版本的 Docker Engine-Community 和 containerd
```yaml
  yum install docker-ce docker-ce-cli containerd.io
```
#### 启动Docker
```yaml
  systemctl start docker
```

#### 运行程序
```yaml
  make -f Makefile
```




执行成功默认运行在本机的80端口
