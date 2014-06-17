### nodejsなんだからpipeを使おう？

streamはステキだけど、chunkの扱いは面倒(自分だけ？)  
でも、pipeってステキなメソッドがあるのです

### pipeCopy.jsは覚書
- whileで処理しているので、Bufferサイズ次第では高負荷
- 本来filterStreamの定義は別のファイルでやるべきで、requireするべき
- createReadStream/createWriteStreamは、直接ではなく変数に格納するべき？
- 関係ないけど、windowsだとprocess.stdoutに出力できない？関係ないけど。
