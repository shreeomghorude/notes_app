import { Fragment } from "react"
import { Navbar } from "../../Components/Navbar"
import { SideBar } from "../../Components/Sidebar"
import { useNotes } from "../../Components/context/notes-context"
import { NotesCard } from "../../Components/NotesCard";

export const Archive = () => {

    const { archive } = useNotes();

    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-3">
                <SideBar />
                <div>
                <div className="flex flex-wrap gap-6 w-screen mt-7">
                        {
                            archive?.length > 0 && archive.map(({ id, title, text, isPinned }) => (
                                <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                            ))
                        }
                    </div>
                </div>
                    
            </main>
        </Fragment>
    )
}