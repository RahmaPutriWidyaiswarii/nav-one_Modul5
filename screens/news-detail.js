// mengimpor beberapa komponen yang dibutuhkan 
import { Heading, Center, Text } from "native-base";
import { Header } from "../components";

//  menerima satu prop, yaitu route. Prop route mengandung informasi tentang rute yang digunakan untuk menavigasi ke komponen ini.
const NewsDetail = ({ route }) => {
  // Get the params
  // mengambil data parameter item dari prop route.params
  //  route.params berisi objek yang memiliki properti item serta  berisi informasi
    const params = route.params.item;
    return (
        <>
        <Header title={"News"} withBack="true" />
        <Center flex={1} p={"4"}>
            <Heading>News Detail</Heading>
            <Text textAlign={"center"}>{params.title}</Text>
        </Center>
        </>
    );
};

export default NewsDetail;
