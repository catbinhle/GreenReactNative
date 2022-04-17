import { StyleSheet, Dimensions } from "react-native";

const styleHome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    divider: {
        // flex: 1,
        height: 1,
        width: '100%',
        backgroundColor: 'rgba(16, 16, 16, 0.1)',
    },

    header: {
        // ...divider, dùng để gọi lại style có sẵn
        width: '100%',
        height: 49,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(248, 248, 248, 0.8)',
        shadowColor: 'rgba(16, 16, 16, .05)',
        shadowOffset: {
            width: 0,
            height: 4
          },
        elevation: 8,
        shadowRadius: 8,
        shadowOpacity: 1,
        zIndex: 1
        // box-shadow: 0px 4px 8px 

    },
    headerText: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        color: '#101010',
        letterSpacing: .15,
    },

    body: {
        
    }
})

export default styleHome