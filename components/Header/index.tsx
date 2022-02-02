import Icon from '@material-tailwind/react/Icon'
import Button from '@material-tailwind/react/Button'

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-md">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="ml-2 hidden text-2xl text-gray-700 md:inline-flex">
        Docs
      </h1>

      <div className="mx-5 flex flex-grow items-center rounded-lg bg-gray-100 p-5 py-2 text-gray-600 focus-within:text-gray-600 focus-within:shadow-md md:mx-20">
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow bg-transparent px-5 outline-none"
        />
      </div>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-1 h-20 w-20 border-0 md:ml-20 md:inline-flex"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>

      <img
        loading="lazy"
        className="ml-2 h-12 w-12 cursor-pointer rounded-full"
        src="https://pbs.twimg.com/profile_images/1454733510556540930/zenpMKrb_400x400.jpg"
        alt=""
      />
    </header>
  )
}

export default Header

// session.user.image
// onClick={signOut}
