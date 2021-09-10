# select_class
### 在代码的第4行：
```electCourseTable.tip.submit({lessonId: 458831,lessonCount: 0,ele:this,type:jQuery(this).attr('operator'),virtualLoc:'list',virtualCashEnabled:false})```
这句话实际上是从选课系统中拷贝出来的![image](https://user-images.githubusercontent.com/29893289/132826894-c01cd134-1158-4915-887d-5ba948edb500.png)
### 具体找到这句话的方法就是对着你想选的那门课的的“选课”按钮右键，点击“检查”就可以找到类似这样一句话: 
```<a class="lessonListOperator" href="javascript:void(0)" onclick="electCourseTable.tip.submit({lessonId: 446912,lessonCount: 1,ele:this,type:jQuery(this).attr('operator'),virtualLoc:'list',virtualCashEnabled:false})" operator="ELECTION">选课</a>```
### 把onclick中的代码拷贝出来粘贴到代码第四行
### 然后把整段代码拷贝到console窗口，按下“回车”就可以运行了 
![image](https://user-images.githubusercontent.com/29893289/132827901-963e2951-1099-4c12-98ca-13e300725252.png)
### 运行效果如下：
![image](https://user-images.githubusercontent.com/29893289/132828068-2f9e920b-9f8b-4bd5-b2af-58b720137234.png)
### 保持浏览器别关，就可以一直运行，运气好的话就能选到课了~~~~！！！
