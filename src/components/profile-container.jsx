export function ProfileContainer({children, style, isRight = false}) {
    return(
        <section 
            className="profile-container"
            style={{
                flex: isRight ? 2 : 1,
                ...style
            }}
        >
            {children}
        </section>
    )
}

// .profile-container {
//     display: flex;
//     flex-direction: column;
// }