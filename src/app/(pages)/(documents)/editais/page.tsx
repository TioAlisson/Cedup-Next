

import data from "@/data/dataDocuments.json"
import dataEditais from "@/data/dataDocuments.json"
import SingleBanner from "../../components/SingleBanner";
import Table from "../components/Table";
import CardDocuments from "../components/CardsDocuments";

export default function Editais() {
    return (
        <div>
            <SingleBanner
                title="Editais"
                backgroundImage="https://tioalisson.github.io/Projeto-Cedup.github.io/assets/img/bg-doc.svg"
            />
            <div className='py-10 lg:container mx-auto'>
                <section className="py-12 lg:w-auto">
                    <div className="lg:container mx-auto">
                        {dataEditais.documents.editais.map((item, index) => (
                            <Table
                                key={index} 
                                descricao={item.descricao} 
                                edital={item.edital} 
                                url1={item.url1} 
                                url2={item.url2} 
                            />
                        ))}

                        <div className='block lg:hidden'>
                            {data.documents.editais.map((item, index) => (
                                <CardDocuments
                                    key={index}
                                    title={item.edital}
                                    paragraph={item.descricao}
                                    url1={item.url1}
                                    url2={item.url2}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
