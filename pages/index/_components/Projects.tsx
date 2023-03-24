import { Index } from 'solid-js'
import ProjectItem from './ProjectItem'

export default () => {
  const projectLists = [
    {
      name: '周报生成器',
      desc: '写周报烦恼？用ChatGPT写一个！几秒钟生成让老板满意的周报，快来试试吧👏🏻.',
      link: 'https://zb.ninglz.com',
      icon: 'i-fluent-emoji-flat-bookmark-tabs',
    }, {
      name: '啊哈空间',
      desc: '让每一次访问，都收获惊喜!',
      link: 'https://1aha.com',
      icon: 'i-fluent-emoji-flat-face-with-open-mouth',
    }, 
    
  ]
  const openLink = () => {
    window.open('https://github.com/Ninglz', '_blank')
  }
  return (
    <>
      <h2 class="flex items-center mt-14 mb-4 font-semibold text-3xl">
        <span flex-1 class="title">项目</span>
        <div
          onClick={openLink}
          class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer" 
        >
          <div class="m-2 i-ri-arrow-right-up-line" ></div>
        </div>
      </h2>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Index each={projectLists}>
          {item => (
            <ProjectItem data={item()} />
          )}
        </Index>
      </div>
    </>
  )
}
