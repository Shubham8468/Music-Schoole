import React from "react";
import { AnimatedTooltip } from "./ul/animated-tooltip";
import { AnimatedTestimonials } from "./ul/animated-testimonials";
import {WavyBackground} from "./ul/wavy-background"


const Special = () => {
    const people = [
        {
            id: 1,
            name: "Kaushiki Chakraborty",
            designation: "Hindustani classical vocal",
            image:
                "https://images.openai.com/static-rsc-4/kZyxk25A-MBX_GHYXy-bv_e9MMc23xYHXaOu4J9JKFjOOdFfZSh12wXin7XHjUJmpFb5h48jmSZepM0dzpNhO_riV-4GywYgfkZNFJBjlR38OMJmvNE6aKOMeJaJvg-jxiMz23XiunmCewJD3f3_leOh4kH47TT1gcbPmXnUxd6dzKT8V7F3DpPy6tf_HeEw?purpose=fullsize",
        },
        {
            id: 2,
            name: "Rashid Khan",
            designation: "classical singing",
            image:
                "https://images.openai.com/static-rsc-4/D7ndZE8xjQ1VrrUWg49DW9uEkbTfCKHmNnv2xKecLZT27OXxyzq1AirPKmWo_jpYMrhAvIPot2GfcpsVG6axfXi0XAIcyfAJ1rRO56twNj7A1HP-2kyP1FDs5g59jfMe54_MSaVGJRPIfG8Sy2K3UO_hyymm97q1kTnRx8A12OWlXcBsDLLdBlpqaqYei-Sw?purpose=fullsize",
        },
        {
            id: 3,
            name: "Anindo Chatterjee",
            designation: "best tabla gurus",
            image:
                "https://images.openai.com/static-rsc-4/WaFjykE8qZraQq4NlaM9J7PSrlheVZozII4ezGNGMCBSpkXztyHZGcqBVU-ga4PJ6Ac0IrDpnzuqh9Q9OUeZL1G4E-bPi8-aMYoLf1jP9sSnA1Pb9h3i2-NaZ2eFjh4jqcAdFUrz7kG_ww7ds6BGZqicp02bXooBvfEVpzi8I1B00o3J7Lid9z5d3iTbc6bN?purpose=fullsize",
        },
        {
            id: 4,
            name: "Ulhas Kashalkar",
            designation: "Hindustani classical vocalist",
            image:
                "https://images.openai.com/static-rsc-4/w8tVg2ZG2Ud2gKvxCCnnlVv77y1JTptO4Ez8r7Pl1etNgYDXpXyayldlEXiwi9kE_OrOoY0385II0wM2jXvbjeAFO2dyJQv_VhN2gQhriBUQXYzc8vOuvhPRdItaMfI2Hdh9VzAio-6rxKm--fIf6uFmjPo3pgldWjHOcRUDIbyVQbBk3r_xYvrqyjUKkpWn?purpose=fullsize"
        },
        {
            id: 5,
            name: "Niladri Kumar",
            designation: "Modern sitar maestro",
            image:
                "https://images.openai.com/static-rsc-4/qXSnvwLv4EtB9D-rT3aiT51lBK7yvUqNCohfiB_YN0NzPHQPU5yYNI2CQuhDmsMfoXvwkEMWVWiwOgg93jcn0NV0K5loxQxs83vNDsWZ_ZK3G2XWs74PKphZac_LBoybkZ6pnyBpClp9MB-XWHq-Hocj4inT6_yR9faQk6CUWd8TEdep7GvbaVCXSoB0xqaL?purpose=fullsize"
        },
        {
            id: 6,
            name: "Ashwini Bhide",
            designation: "classical teachers",
            image:
                "https://images.openai.com/static-rsc-4/MOOHFWVAkSwxNoBDozc0kovNM50QzNUthKEQ7Nn1RRMvygATcoPeEMEq3P3rNcj8oa_qq-IowJfWnPkg7NCpYzxvwdpT46yGuUx4ZxQt5s_HdLvJDWPQ7DlsJRDlLM1xIx1RBrhC-R7p6Dho0mKAlvyJZ49Rp0UuVFNFb6MBKthrG0XfV0SkHoa8jsipVDOI?purpose=fullsize"
        }
    ];
    return (
        <div className="relative h-[60rem]  sm:h-[50rem]  overflow-hidden flex items-center justify-center mt-0">
           
            <WavyBackground> 
                 <h2 className="sm:text-7xl text-4xl font-bold text-center text-neutral-300 py-5 pt-0">Meet Our Instructore</h2>
                 <p className="sm:text-md px-3 md:py-5  font-bold text-center text-yellow-100 ">Discover the talented professinals who will guide your musical journey </p>
                 <AnimatedTestimonials testimonials={testimonials} />
            </WavyBackground>
           

        
        </div>
        
    );
}

const testimonials = [
    {
        quote:
            "संगीत केवल सुर और ताल नहीं, यह दिल की गहराइयों से निकली भावना है। जो इसे सच्चे मन से सीखता है,वह हर पल में खुशी ढूंढ लेता है।",
        name: "Kaushiki Chakraborty",
        designation: "Hindustani classical vocal",
        src:
            "https://images.openai.com/static-rsc-4/kZyxk25A-MBX_GHYXy-bv_e9MMc23xYHXaOu4J9JKFjOOdFfZSh12wXin7XHjUJmpFb5h48jmSZepM0dzpNhO_riV-4GywYgfkZNFJBjlR38OMJmvNE6aKOMeJaJvg-jxiMz23XiunmCewJD3f3_leOh4kH47TT1gcbPmXnUxd6dzKT8V7F3DpPy6tf_HeEw?purpose=fullsize",
    },
    {
        quote:
            "रोज़ का रियाज़ इंसान को बेहतर बनाता है, सिर्फ गाने में नहीं, जीवन में भी। संगीत सिखाता है धैर्य और समर्पण, जो हर सफलता की असली पहचान है।",
        name: "Rashid Khan",
            designation: "classical singing",
            src:
                "https://images.openai.com/static-rsc-4/D7ndZE8xjQ1VrrUWg49DW9uEkbTfCKHmNnv2xKecLZT27OXxyzq1AirPKmWo_jpYMrhAvIPot2GfcpsVG6axfXi0XAIcyfAJ1rRO56twNj7A1HP-2kyP1FDs5g59jfMe54_MSaVGJRPIfG8Sy2K3UO_hyymm97q1kTnRx8A12OWlXcBsDLLdBlpqaqYei-Sw?purpose=fullsize",
        },
    {
        quote:
            "जब शब्द कम पड़ जाते हैं, तब संगीत बोलता है। हर सुर में एक एहसास छुपा होता है, बस उसे महसूस करना सीखो।",
         name: "Anindo Chatterjee",
            designation: "best tabla gurus",
            src:
                "https://images.openai.com/static-rsc-4/WaFjykE8qZraQq4NlaM9J7PSrlheVZozII4ezGNGMCBSpkXztyHZGcqBVU-ga4PJ6Ac0IrDpnzuqh9Q9OUeZL1G4E-bPi8-aMYoLf1jP9sSnA1Pb9h3i2-NaZ2eFjh4jqcAdFUrz7kG_ww7ds6BGZqicp02bXooBvfEVpzi8I1B00o3J7Lid9z5d3iTbc6bN?purpose=fullsize",
        },
    {
        quote:
            "संगीत एक साधना है, जो मन को शांति देती है। इसमें खो जाओ तो दुनिया की चिंता भूल जाती है, और आत्मा को सुकून मिलता है।",
        name: "Ulhas Kashalkar",
            designation: "Hindustani classical vocalist",
        src:
                "https://images.openai.com/static-rsc-4/w8tVg2ZG2Ud2gKvxCCnnlVv77y1JTptO4Ez8r7Pl1etNgYDXpXyayldlEXiwi9kE_OrOoY0385II0wM2jXvbjeAFO2dyJQv_VhN2gQhriBUQXYzc8vOuvhPRdItaMfI2Hdh9VzAio-6rxKm--fIf6uFmjPo3pgldWjHOcRUDIbyVQbBk3r_xYvrqyjUKkpWn?purpose=fullsize"
        },
    {
        quote:
            "संगीत वो जादू है जो दिलों को जोड़ता है, हर सुर में छुपी होती है एक नई कहानी। जो इसे मेहनत और लगन से अपनाता है, उसकी ज़िंदगी बन जाती है सुरीली और सुहानी।",
        name: "Niladri Kumar",
            designation: "Modern sitar maestro",
          src:
                "https://images.openai.com/static-rsc-4/qXSnvwLv4EtB9D-rT3aiT51lBK7yvUqNCohfiB_YN0NzPHQPU5yYNI2CQuhDmsMfoXvwkEMWVWiwOgg93jcn0NV0K5loxQxs83vNDsWZ_ZK3G2XWs74PKphZac_LBoybkZ6pnyBpClp9MB-XWHq-Hocj4inT6_yR9faQk6CUWd8TEdep7GvbaVCXSoB0xqaL?purpose=fullsize"
        },
];


export default Special;