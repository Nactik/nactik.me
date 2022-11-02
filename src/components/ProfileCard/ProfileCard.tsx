import pp from '../../assets/pp.png';

export const ProfileCard = () => {
    return (
        <div className="flex flex-col justify-evenly items-center p-3 max-w-lg h-[80vh] max-h-[80vh]">
            <img
                src={pp}
                alt="profile picture"
                className="rounded-full object-cover ring-4 ring-ctp-flamingo ring-offset-8 ring-offset-ctp-base h-80 w-80"
            />
            <h1 className="text-medium text-lg">
                <span className="text-ctp-flamingo">N</span>athan Capiaux
            </h1>
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi aut nobis voluptatibus ab, ullam
                suscipit voluptates possimus voluptatum dolor ratione expedita qui exercitationem aspernatur totam
                veritatis blanditiis nulla quod modi .
            </div>
        </div>
    );
};
