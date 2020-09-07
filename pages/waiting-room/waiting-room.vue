<template>
	<view class="content"  @longpress="open" @click="open">
		<image class="bg" src="/static/logo.png" ></image>
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
			<view class="info-patient" v-for="(item,index) in data" :key="index">
				<view class="room">{{item.room}}</view>
				<view class="remark">{{item.remark}}</view>
				<view class="doctor">{{item.doctor}}</view>
				<view class="number">{{item.number}}</view>
				<view class="name">{{item.name}}</view>
				<view class="status">{{item.status}}</view>
			</view>
		</view>
		<uni-popup ref="popup" type="center" :maskClick="false">
			<view class="popup">
				<view class="popup-header">
					设置
				</view>
				<view>
					<view class="uni-form-item ">
						<view class="popup-title">科室：</view>
						<input class="uni-input" v-model="iType"  placeholder="请输入科室" />
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
			title:'',
			weekday: [],
			data:[
				// {
				// 	room:'科室1',
				// 	remark:'速来',
				// 	doctor:'张医生',
				// 	number:"K101",
				// 	name:'张*鑫',
				// 	status:'正在检查',
				// },
			
			],
			cliniqueCode:'',
			iType:'',
			popupShow:false,
			seqNumber:'',
			test:'测试',
			testNubmer:0,
			voiceData:[],
			voiceDataInit:[],
			voicePlayNumber:0,
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
		// this.newDate();
		// setTimeout(() => {
		// 	this.newDate();
		// 	setInterval(() => {
		// 		this.newDate();
		// 	}, 60000);
		// }, date.getSeconds() * 1000);
		
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
					title:'请输入科室',
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
			// let datas = [{"queue_name":"口腔门诊(大厅)","dept_code":"31501","clinique_code":"科室7","dept_name":"口腔门诊","queue_time":"27-8月 -20","tech_title":"主治医师","doctor":"林建树","employe_no":"d009","doctor_seq":"1","current_call_time":"2020-08-27 14:02:42","am_pm":"下午","patient_id":"0000016436","patient_name":"周凤","status":"呼叫","seq_number":"52139","work_host":"172.31.12.73","calling_now_flag":null,"pre_status":"1","staff_no":"129"},{"queue_name":"口腔门诊(大厅)","dept_code":"31501","clinique_code":"科室5","dept_name":"口腔门诊","queue_time":"27-8月 -20","tech_title":"主治医师","doctor":"林建贞","employe_no":"d181","doctor_seq":"1","current_call_time":"2020-08-27 15:02:42","am_pm":"下午","patient_id":"0000031498","patient_name":"杨忠","status":"排队","seq_number":"53934","work_host":"172.31.12.73","calling_now_flag":null,"pre_status":null,"staff_no":"134"},{"queue_name":"口腔门诊(大厅)","dept_code":"31501","clinique_code":"科室7","dept_name":"口腔门诊","queue_time":"27-8月 -20","tech_title":"主治医师","doctor":"林建树","employe_no":"d009","doctor_seq":"6","current_call_time":"2020-08-27 16:02:42","am_pm":"下午","patient_id":"0000113877","patient_name":"魏良清","status":"呼叫","seq_number":"52975","work_host":"172.31.12.73","calling_now_flag":null,"pre_status":"1","staff_no":"129"}]
			// datas[0].doctor_seq = datas[0].doctor_seq + this.testNubmer++
			// let datas = []
			// let dataMaps = [];
			// let voiceDataInit = [];
			
			uni.request({
			    url: 'http://172.31.12.188:8080/Queue/Get_disp_Queue', 
				data:{
					dept_name :this.iType ,
				},
				timeout:3000,
			    success: (res) => {
					let datas = res.data.Data;
					let dataMaps = [];
					let voiceDataInit = [];
					this.newDate(res.data.ServiceTime);
					if(datas.length>0){
						if(datas[0].queue_name && this.title!= datas[0].queue_name){
							this.title = datas[0].queue_name;
						}
					}
					datas.forEach((data,index) =>{
						let name =data.patient_name?this.hideName(data.patient_name):'';
						let dataMap = {
							room:data.clinique_code,
							remark:'',
							doctor:data.doctor,
							number:data.doctor_seq,
							name:name,
							status:data.status
						}
						dataMaps = dataMaps.concat(dataMap);
					
						if(name && data.status == '呼叫'){
							let number = this.chineseNumeral(dataMap.number+'');
							let speakText = `请,${number}号,${data.patient_name},到,${dataMap.room},检查`;
							if(this.data.length==0){
								this.voiceData.push(speakText);
								this.voiceDataInit.push(speakText);
							} 
							else{
								voiceDataInit = voiceDataInit.concat(speakText);
							}
							
						}
					})
					if(voiceDataInit.length>0){
						this.findDifferentElements(voiceDataInit,this.voiceDataInit)
						this.voiceDataInit = voiceDataInit;
					}
					this.data = dataMaps;
					console.log(this.data);
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
				}
			});
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
			
			console.log(this.voiceData[0]);
			
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
				console.log(this.voicePlayNumber);
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
		},
		//两个数组的差集
		findDifferentElements(array1, array2) {
			let data = array1.filter(function(v){ return array2.indexOf(v) == -1 });
			this.voiceData = data;
			return data;
		}
	}
};
</script>

<style>
page {
	height: 100%;
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
	width: 305px;
}
.remark{
	width: 203px;
}
.doctor{
	width: 306px;
}
.content {
	position: relative;
	height: 100%;
}
.number{
	width: 351px;
}
.status{
	width: 314px;
}
.name{
	width: 337px;
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
	padding-top: 122px;
	padding-left: 55px;
	padding-right: 55px;
}
.info-patient {
	display: flex;
	height: 102px;
}
.info-patient view {
	font-size: 60px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
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
