<template>
  <div class="center">
    <div class="chat-w">
        <h1>大模型</h1>
        <div class="robot-responce">
            <div class="text-box">
                <div class="icon-box">
                    <div class="iconfont icon-robot_"></div>
                </div>
                <p class="response">
                    您好，很高兴为您服务🥰
                </p>
            </div>
        </div>
        <div class="human-responce">
            <div class="text-box">
                <div class="icon-box">
                    <div class="iconfont icon-computer-01"></div>
                </div>
                <div class="response-box">
                    <p class="response">         
                        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    </p>
                </div>
                
            </div>
        </div> 
        <div class="clear-part">
            <button type="button" class="btn btn-outline-dark">
                清空对话
            </button>
        </div> 
    </div>
    <div class="q-bar">
        <div class="form-floating">
            <textarea class="form-control" placeholder="Shift + Enter 换行，Enter 发送" id="floatingTextarea2"
                style="height: 100px"></textarea>
        </div>
    </div>
    
  </div>
</template>

<script>

export default {

}
</script>

<style>
    /* 主体部分 */
    .center{
        max-width: 50rem;
    }
    .center .chat-w{
        padding-top: 5rem ;
        width: 100%;
    }
    .center .chat-w h1{
        font-weight: bold;
    }

    /* 机器回答 */
    .robot-responce{
        margin-top: 1.5rem;
        
        padding-left: 1rem;
    }
    .icon-box{
        float: left;
    }
    .text-box{
        line-height: 3rem;
    }
    .icon-box{
        width: 2rem;
        height: 2rem;
        border: 1px solid rgb(209, 207, 207);
        position: relative;
        top: 0.5rem;
        margin-right: 1rem;
        border-radius: 8px;
    }
    .icon-box .iconfont{
        font-size: 1.5rem;
        position: relative;
        left: 0.18rem;
        bottom: 0.5rem;
    }
    
    /* 人类部分 */
    .human-responce{
        margin-top: 1.5rem;
        padding-left: 1rem;
        background-color: rgb(231, 247, 249);
        border-radius: 8px;
    }
    .response{
        word-break: break-word;
    }
    

    /* question box*/
    .q-bar{
        padding-top: 2rem;
        background-color: white;
        height: 10rem;
        position: fixed;
        bottom: 0;
        width: 50rem;
    }
    .q-bar .form-control{
        border-radius: 10px;
    }

</style>