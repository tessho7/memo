## LinuxMint15 64bit�ŁAadobe air�C���X�g�[�����Ă݂�

### �_�E�����[�h
```sh
$ wget http://airdownload.adobe.com/air/lin/download/latest/AdobeAIRInstaller.bin
```

### ����Ȃ����̃C���X�g�[��
```sh
$ sudo aptitude install ia32-libs
```

### 64bit�̏ꍇ�A�p�X�ݒ�
```sh
$ sudo ln -s /usr/lib/i386-linux-gnu/libgnome-keyring.so.0 /usr/lib/libgnome-keyring.so.0
$ sudo ln -s /usr/lib/i386-linux-gnu/libgnome-keyring.so.0.2.0 /usr/lib/libgnome-keyring.so.0.2.0
```

### ���s
```sh
$ chmod +x AdobeAIRInstaller.bin
$ ./AdobeAIRInstaller.bin
```
