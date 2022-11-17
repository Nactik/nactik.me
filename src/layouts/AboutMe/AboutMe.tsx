import { ProfileCard } from '../../components/ProfileCard';

export const AboutMe = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-around items-center min-h-screen text-ctp-text pt-10">
            <ProfileCard></ProfileCard>
            <hr className=" lg:h-[50vh] rounded lg:w-1 w-[50vh] h-1 bg-ctp-flamingo m-3" />
            <div className="p-3 max-w-lg max-h-[80vh]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde hic blanditiis quidem modi iste in
                deleniti aliquam nisi quo repudiandae tempore exercitationem similique, dicta cumque et consectetur
                autem dolores ex? Eum sint ab harum iusto dolorum minus blanditiis modi. Quia blanditiis autem hic
                ducimus similique. Veniam, itaque ipsa perferendis delectus quibusdam maiores fugit labore consectetur,
                accusantium sed debitis rerum? Voluptas. Odit repellat nisi sed, cumque accusamus tempore quibusdam
                dolores numquam molestiae recusandae eveniet vel, repudiandae ratione corporis rerum, a harum eaque
                tenetur rem consequatur adipisci assumenda deleniti praesentium voluptates. Eum. Dolorem id, est dicta
                eius voluptates optio doloremque mollitia vel accusantium facilis facere dolor iusto distinctio magni.
                Illo repudiandae non nisi pariatur aut quod, consequatur aspernatur corporis, neque dicta ad. Molestias,
                itaque temporibus fugit ipsam veritatis eligendi repellendus voluptate sequi similique quos nisi quaerat
                nesciunt aut, alias quod. Dignissimos dolorem nihil aliquid possimus inventore dolorum doloribus
                perspiciatis tempore, ad ducimus? lorem*5
            </div>
        </div>
    );
};
