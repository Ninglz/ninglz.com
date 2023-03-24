import Socials from './Socials'
// import helloWordArr from '../hello'

export default () => {
  // const helloWord = helloWordArr[Math.floor((Math.random() * helloWordArr.length))]
  
  return (
    <header class="mt-12 md:mt-18">
      <h1 class="title text-5xl font-bold">
        <span class="block">Hello, </span>
        <span class="block mt-2">I'm Ninglz.</span>
      </h1>
      <div class="mt-6">
        <div>
          <span>开发工程师 / 项目经理 / 产品经理.</span>
        </div>
        <div mt-2>
          <span>目前工作于慧贸天下(北京)科技有限公司.</span>
        </div>
        <div mt-2>
          <span>相信<b class='text-red-400'>道阻且长，行则将至</b>.</span>
        </div>
      </div>
      <Socials />
    </header>
  )
}