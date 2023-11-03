// mengimpor beberapa komponen yang diperlukan
// memastikan bahwa konten ditampilkan dalam area aman pada layar perangkat
import { SafeAreaView } from "react-native-safe-area-context";
// untuk mengatur tampilan status bar dan warna latar belakangnya
import { StatusBar } from "react-native";
// komponen yang disediakan oleh pustaka NativeBase untuk membangun antarmuka pengguna dalam React Native
import { Box, HStack, Image, Heading } from "native-base";
// menyediakan area yang dapat ditekan yang akan ada feedback saat ditekan
import { TouchableOpacity } from "react-native";
// untuk merender ikon Ionicons dalam header.
import Ionicons from "@expo/vector-icons/Ionicons";
// digunakan untuk mengakses objek navigasi dalam komponen layar
import { useNavigation } from "@react-navigation/native";

// mengambil dua prop: title dan withBack. Prop withBack bersifat opsional dan secara default diatur ke false
const Header = ({ title, withBack = false }) => {
    const trueGray900 = "#171717";
    const navigation = useNavigation();
    return (
        <SafeAreaView>
        <StatusBar
            barStyle="light"
            backgroundColor={trueGray900}
        />
        <Box
            bg={"trueGray.900"}
            p={"4"}>
            <HStack
            justifyContent="space-between"
            alignItems="center">
            <HStack alignItems="center">
                {!withBack ? (
                <>
                    <Image
                    source={require("../assets/cnn.png")}
                    w="12"
                    h="12"
                    alt="CNN Logo"
                    mr={"3"}
                    />
                </>
                ) : (
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.goBack()}>
                    <Box mr={"3"}>
                    <Ionicons
                        name="arrow-back-outline"
                        size={32}
                        color="white"
                    />
                    </Box>
                </TouchableOpacity>
                )}
                <Heading color={"white"}>{title}</Heading>
            </HStack>

            <HStack space={"2xl"}>
                <Image
                source={require("../assets/facebook.png")}
                w="5"
                h="5"
                alt="Facebook Icon"
                />
                <Image
                source={require("../assets/youtube.png")}
                w="5"
                h="5"
                alt="Facebook Icon"
                />
                <Image
                source={require("../assets/twitter.png")}
                w="5"
                h="5"
                alt="Facebook Icon"
                />
                <Image
                source={require("../assets/search.png")}
                w="5"
                h="5"
                alt="Search Icon"
                />
            </HStack>
            </HStack>
        </Box>
        </SafeAreaView>
    );
    };

    export default Header;
