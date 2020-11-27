<template>
  <div class="page">
    <!-- 头 -->
    <header class="headCon">
      <a href="#"><img src="../../assets/images/logo.jpg" alt="logo" /></a>
      <input class="searec" type="text" placeholder="寻找商品" />
      <p class="meau">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <!-- 导航 -->
    <nav class="nav">
      <ul>
        <li class="active"><a href="#">推荐</a></li>
        <li><a href="#">女装</a></li>
        <li><a href="#">鞋包</a></li>
        <li><a href="#">居家</a></li>
        <li><a href="#">母婴儿童</a></li>
        <li><a href="#">美食</a></li>
        <li><a href="#">果脯</a></li>
        <li><a href="#">果脯</a></li>
        <li><a href="#">果脯</a></li>
        <li><a href="#">果脯</a></li>
        <li><a href="#" class="arrow"></a></li>
      </ul>
    </nav>
    <!-- banner -->
    <div class="banner">
      <!-- <a href="#"><img src="../../assets/images/banner.jpg" alt="banner" /></a> -->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in bannerLiset" :key="index">
          <img class="img" :src="$imgUrl + image.img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- icon -->
    <div class="icon">
      <ul>
        <li>
          <a href="javascript:;">
            <img src="../../assets/images/indexicon1.jpg" alt="icon" />
            <p>限时抢购</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../../assets/images/indexicon2.jpg" alt="icon" />
            <p>积分商城</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../../assets/images/indexicon3.jpg" alt="icon" />
            <p>联系我们</p>
          </a>
        </li>
        <li>
          <router-link to="/sort">
            <a href="javascript:;">
              <img src="../../assets/images/indexicon4.jpg" alt="icon" />
              <p>商品分类</p>
            </a>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 限时抢购 -->
    <div class="limit">
      <div class="limTime">
        <h3><em></em>限时秒杀</h3>
        <p>每天零点场 好货秒不停</p>
        <div>
          <span>02</span>
          <span>16</span>
          <span>45</span>
          <span>秒杀</span>
        </div>
        <a href="#"
          ><img src="../../assets/images/shop_5.jpg" alt="shop_5" /><em
            >&yen;14.8</em
          ></a
        >
      </div>
      <div class="new">
        <div class="top">
          <div>
            <h3>新品上市<em>折</em></h3>
            <p>每日九点&nbsp;抢大牌</p>
            <img src="../../assets/images/brand.jpg" alt="brand" />
          </div>
          <div>
            <img src="../../assets/images/shop_1.jpg" alt="shop_1" />
          </div>
        </div>
        <div class="bottom">
          <div>
            <h3>每日十件</h3>
            <p>只为你选好货</p>
            <img src="../../assets/images/shop_2.jpg" alt="shop_2" />
          </div>
          <div>
            <h3>拼啊</h3>
            <p>超级好价拼团</p>
            <img src="../../assets/images/shop_3.jpg" alt="shop_3" />
          </div>
        </div>
      </div>
    </div>
    <!-- 广告 -->
    <div class="bar">
      <a href="#"><img src="../../assets/images/bar.jpg" alt="bar" /></a>
    </div>
    <!-- 推荐好货 -->
    <div class="find">
      <van-tabs type="card">
        <van-tab title="推荐好货">
          <ul class="items">
            <li v-for="item in newsList" :key="item.id">
              <div class="left fl">
                <img :src="$imgUrl + item.img" alt="" />
              </div>
              <div class="right fl">
                <h4>{{ item.goodsname }}</h4>
                <p>{{ item.market_price }}</p>
                <p></p>
                <a href="javascript:;">立即抢购</a>
              </div>
            </li>
          </ul>
          <!-- <div class="left fl">
              <img :src="$imgUrl+item.img" alt="" />
            </div>
            <div class="right fl">
              <h4>{{item.goodsname}}</h4>
              <p>{{item.market_price}}</p>
              <p></p>
              <a href="javascript:;">立即抢购</a>
            </div> -->
        </van-tab>
        <van-tab title="发现好货">内容 2</van-tab>
        <van-tab title="只看专场">内容 3</van-tab>
        <van-tab title="只看商品">内容 3</van-tab>
      </van-tabs>
      <!-- <ul class="items">
        <li>
          <div class="left fl">
            <img src="../../assets/images/shop_4.jpg" alt="shop_4" />
          </div>
          <div class="right fl">
            <h4>雅诗兰黛染发膏60ml</h4>
            <p>&yen;123.00</p>
            <p>已售800件</p>
            <a href="#">立即抢购</a>
          </div>
        </li>
        <li>
          <div class="left fl">
            <img src="../../assets/images/shop_4.jpg" alt="shop_4" />
          </div>
          <div class="right fl">
            <h4>雅诗兰黛染发膏60ml</h4>
            <p>&yen;123.00</p>
            <p>已售800件</p>
            <a href="#">立即抢购</a>
          </div>
        </li>
        <li>
          <div class="left fl">
            <img src="../../assets/images/shop_4.jpg" alt="shop_4" />
          </div>
          <div class="right fl">
            <h4>雅诗兰黛染发膏60ml</h4>
            <p>&yen;123.00</p>
            <p>已售800件</p>
            <a href="#">立即抢购</a>
          </div>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import { getBannerList, getIndexgoods } from "../../utils/axios";
import axios from "axios";
export default {
  data() {
    return {
      bannerLiset: [],
      newsList: [],
      hotsList: [],
      goodsList: [],
    };
  },
  mounted() {
    // getBannerList().then((res) => {
    //   console.log(res);
    //   if (res.data.code == 200) {
    //     this.bannerLiset = res.data.list;
    //   }
    // });
    // getIndexgoods().then((res) => {
    //   console.log(res);
    // });
    axios.all([getBannerList(), getIndexgoods()]).then(
      axios.spread((bannerlist, indexGoods) => {
        console.log(bannerlist, indexGoods);
        if (bannerlist.data.code) {
          this.bannerLiset = bannerlist.data.list;
        }
        if (indexGoods.data.code == 200) {
          this.newsList = indexGoods.data.list[0].content;
          console.log(this.newsList, "新品");
        }
      })
    );
  },
};
</script>

<style scoped>
@import "../../assets/css/public.css";
@import "../../assets/css/index.css";
.img {
  width: 100%;
  height: 2rem;
}
</style>