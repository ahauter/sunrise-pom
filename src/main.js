import './style.css'

const image_container = (title, description, src) => {
  return  `
      <div 
        id="image-container"
        class="shadow-lg my-2 min-sm:m-3 p-2 bg-stone-100 w-lg max-sm:w-full min-sm:rounded-lg">
        <h3
          id="title"
          class="text-slate-800 font-extrabold text-3xl"
          >
          ${title}
        </h3>
        <image 
          class="w-lg max-sm:w-full rounded-lg mb-3"
          src="${src}" />
        <p 
          id="caption">
          ${description}
        </p>
      </div>
  `
}

const test_images = [
  {
    title: "Crecent Lake",
    description: "This picture was taken on a road trip with friends. We pulled over for a short bathroom break on our way to Forks, Wa (One of us was a big twightlight fan). We didn't think much of the stop, until we saw the lake. You can't tell from the photograph, but the lake was a beautiful shade of blue. Nature has a way of suprising you with an uncapturable beauty; a beauty that can only be held in the moments were you're able to stop and be still.",
    src: "/images/IMG_0217.JPEG"
  },
  {
    title: "Columbia River Gorge--Bridge of the Gods",
    description: "This bridge crosses the Columbia river, flanked by mountains, the river serves as a reminder of how powerful nature can be. The bridge is a testimate to the human spirit. Even a simple bridge like this is a awesome feat of human determination and ingenuity. I am inspired by both the river that cut through mountains and the bridge that dares cross it.",
    src: "/images/IMG_2453.JPEG"
  },
  {
    title: "Saratoga Passage at Sunset",
    description: "Being out alone on a boat at sunset is one of the most peaceful and dangerous things I do. If I slip and fall once, I would be adrift in the Saratoga passage--swimming against strong currents and cold water. Even with a lifejacket, my survival is unlikely. My fragility stands as a reminder that I am a temporary steward of this world. Nature will bless us with its beauty only if we respect it's wrath.",
    src: "/images/IMG_2505.JPEG"
  },
];

document.querySelector('#scroll-container').innerHTML = test_images.map(
  img_info => image_container(img_info.title, img_info.description, img_info.src)
).join("\n");
