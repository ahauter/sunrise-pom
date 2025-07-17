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
    title: "Image Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    src: "https://yavuzceliker.github.io/sample-images/image-2.jpg"
  },
  {
    title: "Image Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    src: "https://yavuzceliker.github.io/sample-images/image-2.jpg"
  },
  {
    title: "Image Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    src: "https://yavuzceliker.github.io/sample-images/image-2.jpg"
  },
  {
    title: "Image Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    src: "https://yavuzceliker.github.io/sample-images/image-2.jpg"
  },
  {
    title: "Image Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    src: "https://yavuzceliker.github.io/sample-images/image-2.jpg"
  },
  {
    title: "Image Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    src: "https://yavuzceliker.github.io/sample-images/image-2.jpg"
  },
];

document.querySelector('#scroll-container').innerHTML = test_images.map(
  img_info => image_container(img_info.title, img_info.description, img_info.src)
).join("\n");
