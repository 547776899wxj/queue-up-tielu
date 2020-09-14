<template>
	<view class="content"  @longpress="open" @click="open">
		<image class="bg" src="/static/pharmacy.png" ></image>
		<view class="header">
			<view class="header-title">{{title}}</view>
			<view class="header-time">
				<view v-if="dateText.year">
					<text>{{ dateText.year }}年{{ dateText.month }}月{{ dateText.date }}日</text>
				</view>
				<view>
					<text style="padding-right: 5px;">{{ dateText.day }}</text>
					<text>{{ dateText.time }}</text>
				</view>
			</view>
		</view>
		<view class="info">
			<view class="info-title">取药窗口</view>
			<view class="info-bottom">
				<view class="info-number">
					<view class="nubmer-circular">
						<view class="number-text">{{iType}}</view>
					</view>
				</view>
				<view class="info-right">
					<view class="right-item">
						<view class="info-patient" v-for="(item,index) in data" :key="index">
							<view class="pr-15" :class="item.name==playName?'yellow':''">{{item.number}}</view>
							<view class="pl-15" :class="item.name==playName?'yellow':''">{{item.name}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="center" :maskClick="false">
			<view class="popup">
				<view class="popup-header">
					设置
				</view>
				<view>
					<view class="uni-form-item ">
						<view class="popup-title">窗口：</view>
						<input class="uni-input" v-model="iType"  placeholder="请输入窗口" />
					</view>
					<view class="uni-form-item uni-form-btn">
						<button type="default" class="chooseBtn" @click="navTo()">选择页面</button>
					</view>
					<view class="uni-form-item " >
						<button class="popup-btn" @click="close">取消</button>
						<button class="popup-btn" @click="confirm">确定</button>
					</view>
				</view>
				
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue'
// #ifdef APP-PLUS
	var FvvUniTTS = uni.requireNativePlugin('Fvv-UniTTS');
// #endif
export default {
	data() {
		return {
			dateText: {
				year: '',
				month: '',
				date: '',
				day: '',
				time: ''
			},
			title:'西药房',
			weekday: [],
			data:[
				// {
				// 	number:'A1002',
				// 	name:'张无忌',
				// },
				// {
				// 	number:'A1002',
				// 	name:'张无忌1',
				// },
				// {
				// 	number:'A1002',
				// 	name:'张无忌2',
				// },
				// {
				// 	number:'A1002',
				// 	name:'张无忌2',
				// }
			
			],
			cliniqueCode:'',
			iType:'',
			popupShow:false,
			seqNumber:'',
			test:'测试',
			testNubmer:0,
			voicePlayNumber:0,
			voiceDataInit:[],
			voiceData:[],
			playName:'',
		};
	},
	onLoad() {
		this.iType = uni.getStorageSync('iType')||'';
		let date = new Date();
		this.weekday = new Array(7);
		this.weekday[0] = '星期日';
		this.weekday[1] = '星期一';
		this.weekday[2] = '星期二';
		this.weekday[3] = '星期三';
		this.weekday[4] = '星期四';
		this.weekday[5] = '星期五';
		this.weekday[6] = '星期六';
		if(this.iType){
			this.init();
		}
	},
	methods: {
		//选择页面
		navTo(){
			uni.setStorageSync('pageSetBoolean',false);
			uni.redirectTo({
				url: '../index/index',
				success: res => {
				},
				fail: () => {},
				complete: () => {}
			});
		},
		//当前时间
		newDate(dataTime) {
			let date = new Date(dataTime);
			this.dateText = {
				year: date.getFullYear(),
				month: date.getMonth() + 1,
				date: date.getDate(),
				day: this.weekday[date.getDay()],
				time: date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
			};
		},
		// 打开设置
		open(){
			this.$refs.popup.open();
			this.popupShow = true;
		},
		// 关闭设置
		close(){
			this.$refs.popup.close();
			this.popupShow = false;
			
		},
		//确定设置
		confirm(){
			if(this.iType===''){
				uni.showToast({
					title:'请输入窗口',
					icon:'none'
				})
				return
			}
			
			uni.showLoading({
				title: '加载中',
			});
			uni.setStorageSync('iType',this.iType);
			this.popupShow = false;
			this.data = [];
			this.init();
			this.$refs.popup.close();
			uni.hideLoading();
		},
		// 初始化数据
		init(){
			if(this.popupShow){
				return false;
			}
			// 测试使用
			let datas = [{"queue_date":"20200606","storage_code":"药房代码","sick_id":"12345","sick_name":"张三三三","age":"111","lay_queue_type":"A002","counter_no":"ck2","counter_name":"窗口2","cost":"1000000","addon_cost":"10000","serial_no":"101","pres_count":"100","lay_time":"20200606","call_flag":"1","call_operator":"李四","call_time":"20020202","take_operator":"傻逼","tack_time":"19520102","calling_now_flag":"aaa","lay_queue_name":"127.0.0.1","prior_flag":"aaa"},{"queue_date":"20200606","storage_code":"药房代码","sick_id":"123","sick_name":"李四","age":"111","lay_queue_type":"A001","counter_no":"ck2","counter_name":"窗口2","cost":"1000000","addon_cost":"10000","serial_no":"10001","pres_count":"100","lay_time":"20200606","call_flag":"0","call_operator":"李四","call_time":"20020202","take_operator":"傻逼","tack_time":"19520102","calling_now_flag":"aaa","lay_queue_name":"127.0.0.1","prior_flag":"aaa"},{"queue_date":"20200606","storage_code":"药房代码","sick_id":"123","sick_name":"王五","age":"111","lay_queue_type":"A001","counter_no":"ck2","counter_name":"窗口2","cost":"1000000","addon_cost":"10000","serial_no":"10002","pres_count":"100","lay_time":"20200606","call_flag":"0","call_operator":"王五","Replay":true, "call_time":"20020202","take_operator":"傻逼","tack_time":"19520102","calling_now_flag":"aaa","lay_queue_name":"127.0.0.1","prior_flag":"aaa"}];
			// if(this.testNubmer>=2){
			// 	datas[2].Replay = false;
			// }
			// let datas = [];
			// datas[0].serial_no = datas[0].serial_no + this.testNubmer++;
		
			uni.request({
			    url: 'http://172.31.12.188:8080/Queue/Get_dosage_Queue', 
				data:{
					counter_no :this.iType ,
				},
				timeout:3000,
			    success: (res) => {
					let datas = res.data.Data;
					let dataMaps = [];
					let voiceDataInit = [];
					this.voiceData = [];
					if(datas.length>3){
						datas.slice(0,3);
					}
					datas.forEach((data,index) =>{
						let name =data.sick_name?this.hideName(data.sick_name):'';
						let dataMap = {
							number:data.serial_no,
							name:name,
						}
						dataMaps = dataMaps.concat(dataMap);
						if(name){
							let number = this.chineseNumeral(dataMap.number+'');
							let speakText = `请,${number}号,${data.sick_name},到,${data.counter_name},取药 `;
							if(this.data.length==0){
								this.voiceData.push(speakText);
								this.voiceDataInit.push(speakText);
							}else if (data.Replay==true){
								this.voiceData.push(speakText);
								voiceDataInit = voiceDataInit.concat(speakText);
							}
							else{
								voiceDataInit = voiceDataInit.concat(speakText);
							}
						}
					})
					
					if(voiceDataInit.length>0 ){
						let voiceData = this.findDifferentElements(voiceDataInit,this.voiceDataInit); 
						this.voiceData = this.voiceData.concat(voiceData)
						this.voiceDataInit = voiceDataInit;
					}
					this.data = dataMaps;
					if(this.voiceData.length>0){
						this.voiceQueue();	
					}else{
						setTimeout(() => {
							this.init()
						}, 5000);
					}
			    },
				fail:(res) => {
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
					setTimeout(() => {
						this.init()
					}, 5000);
				}
			});
		},
		//两个数组的差集
		findDifferentElements(array1, array2) {
			return  array1.filter(function(v){ return array2.indexOf(v) == -1 });
		},
		// 语音队列
		voiceQueue(){
			// #ifdef APP-PLUS
				FvvUniTTS.init((callback) => {
					FvvUniTTS.speak({
						text:this.voiceData[0]
					});
				});
			// #endif
			//当前叫号姓名
			if(this.voicePlayNumber==0){
				this.playName =this.hideName(this.voiceData[0].split(',')[2]);
			}
			if(this.voiceData.length>1){
				this.onDone(this.voiceData[1]);
			}else{
				if(this.voicePlayNumber<3){
					this.onDone(this.voiceData[0]);
				}else{	
					setTimeout(() => {
						this.init()
					}, 5000);
				}
			}
		},
		// 播放完执行
		onDone(data){
			let date = 4300;
			if(data.length>12){
				date = date + ((data.length - 12)*300 ) 
			}
			setTimeout(() => {
				this.voicePlayNumber++;
				if(this.voicePlayNumber>=3){
					this.voiceData.shift();
					this.voicePlayNumber = 0;
				}
				if(this.voiceData.length>0){
					this.voiceQueue()
				}else{
					this.init()
				}
			}, date);
			
		},
		//转大写
		chineseNumeral(data){
			let tmpnewchar = "" ;
				for(let char of data){
					switch (char) {
			            case "0":   tmpnewchar =  tmpnewchar + "零" ;break;
			            case "1":  tmpnewchar =  tmpnewchar + "一" ; break;
			            case "2":  tmpnewchar =  tmpnewchar + "二" ; break;
			            case "3":  tmpnewchar =  tmpnewchar + "三" ; break;
			            case "4":  tmpnewchar =  tmpnewchar + "四" ; break;
			            case "5":  tmpnewchar =  tmpnewchar + "五" ; break;
			            case "6":  tmpnewchar =  tmpnewchar + "六" ; break;
			            case "7":  tmpnewchar =  tmpnewchar + "七" ; break;
			            case "8":  tmpnewchar =  tmpnewchar + "八" ; break;
			            case "9":  tmpnewchar =  tmpnewchar + "九" ; break;
						default: tmpnewchar = tmpnewchar + char;
			        }
			}
			return tmpnewchar;
		},
		//隐藏名字
		hideName(name){
			if(name.length==2){
			    name = name.slice(0,1)+'*';
			}else if(name.length>2){
				name = name.slice(0,1) + '*' + name.slice(2,name.length)
			}
			return name;
		}
	}
};
</script>

<style>
.pr-15{
	padding-right: 15px;
}
.pl-15{
	padding-left: 15px;
}
.pt-15{
	padding-top: 15px;
}
page {
	height: 100%;
}
.info-bottom{
	display: flex;
    padding-top: 128px;
}
.info-number{
	height: 504px;
	width: 574px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.nubmer-circular{
    height: 350px;
    width: 350px;
	position: relative;
    border-radius: 300px;
    border: 35px solid #fcff00;
	display: flex;
	justify-content: center;
	align-items: center;
}
.info-patient view.yellow{
	color: #fcff00 !important;
	font-size: 127px;
	height: 260px;
	line-height: 260px;
}
.number-text{
	font-size: 332px;
	position: absolute;
	color: #fcff00;
	font-weight: bold;
}
.uni-form-item.uni-form-btn{
	padding: 0;
}

.chooseBtn{
	font-size: 30px;
	width: 438px;
}
.header{
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	height: 170px;
}
.room{
	width: 404px;
}
.doctor{
	width: 404px;
}
.seeing{
	width: 506px;
}
.content {
	position: relative;
	height: 100%;
}

.bg {
	position: absolute;
	height: 1080px;
	width: 1920px;
	z-index: -1;
}
.header-time {
	display: flex;
	position: absolute;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	right: 20px;
	padding-top: 15px;
	top: 33px;
}

.header-time view {
	width: 360px;
	font-size: 37px;
	color: #000;
	text-align: center;
	letter-spacing:2px;
}
.info{
	padding-left: 55px;
	padding-right: 55px;
}
.info-right{
	display: flex;
	align-items: center;
}
.right-item{
	display: flex;
	flex-wrap: wrap;
	width: 1239px;
}
.info-patient.patient-left{
	width: 585px;
}
.info-patient {			
	display: flex;
	width: 1236px;
	justify-content: center;
	align-items: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.info-patient view {
	font-size: 81px;
	color: #fff;
	text-align: center;
	letter-spacing: 4px;
	font-weight: bold;
}
.info-title{
	font-size: 125px;
    color: #fff;
    height: 208px;
	text-align: center;
    line-height: 208px;
    font-weight: bold;
	letter-spacing: 4px;
}
.popup-btn{
		font-size: 30px;
		color: #fff;
		padding-left: 40px;
		padding-right: 40px;
		background-color: rgb(68,114,196);
		margin-left: 40px;
		margin-right: 40px;
	}
	.popup{
		background-color: #fff;
		width: 600px;
		font-size: 40px;
		z-index: 100;
	}
	.popup-header{
		background-color: rgb(68,114,196);
		text-align: center;
		padding: 10px 0 ;
	}
	.uni-form-item{
		display: flex;
		align-items: center;
		padding: 40px;
		justify-content: center;
	}
	.popup-title{
		font-size: 30px;
	}
	.uni-input{
		font-size: 25px;
		border: 1px solid;
		padding: 20px 30px;
	}
</style>

