import {StyleSheet} from "react-native";

const StylesModalLike = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        flexDirection: "row",
        margin: 20
    },
    Gotoitems: {
        flex: 1,
        height: 40,
        backgroundColor: "red",
        borderRadius: 10,
        justifyContent: "center"
    },
    text: {
        textAlign: "center"
    },
    count: {},
    modal: {
        flex: 1,
        marginTop: 150,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 150,
        //backgroundColor: "pink",
    },
    modal_content: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    modal_text_thanksapp: {
        color: "white",
        fontSize: 20,
        textAlign: "center"
    },
    modal_content_2: {
        flex: 5,
        backgroundColor: "pink"
    },
    modal_content_text: {
        flex: 2,
        flexDirection: "row"
    },
    modal_content_select: {
        flex: 4,
        backgroundColor: "pink"
    },
    styleSeclect: {
        borderWidth: 1,
        borderColor: "green",
        width: "100%"
    },
    modal_top: {
        height: 2,
        backgroundColor: "white"
    },
    modal_content_textinput: {
        flex: 5,
        backgroundColor: "pink",
        margin: 10
    },
    textinput: {
        height: "100%",
        borderColor: 'gray',
        borderWidth: 1
    },
    modal_content_ok: {
        flex: 1,
        backgroundColor: "green",
        flexDirection: "row",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    modal_tounchable_ok: {
        flex: 1,
        alignSelf: "center"
    },
    text_ok: {
        textAlign: "center",
        fontSize: 20
    },
    text_width: {
        width: 3,
        backgroundColor: "white",
        textAlign: "center"
    },
    tounchable_cancel: {
        flex: 1,
        alignSelf: "center"
    },
    text_cancel: {
        textAlign: "center",
        fontSize: 20
    }
})
export default StylesModalLike;