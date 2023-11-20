import AccentButton from "../clickables/AccentButton";
import PrimaryButton from "../clickables/PrimaryButton";
import Brand from "../subcomponents/Brand";
import SearchBar from "../subcomponents/Search";



export default function Navbar (){
    return <nav className="fixed flex flex-col justify-center min-w-full items-center nk-bg-primary-dark p-8">
        <div className="flex flex-row justify-between items-center container">
            <div className="brandHolder">
                <Brand/>
            </div>

            <div className="navigationButtons flex flex-row gap-4 justify-center items-center">
                <div className="searchBoot">
                    <SearchBar />
                </div>
                <PrimaryButton params={{link:"string",text:"Login"}} />

                <AccentButton params={{link:"string",text:"Book a demo"}}/>
            </div>
        </div>
    </nav>
}