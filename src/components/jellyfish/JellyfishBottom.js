import jellyfish from "../../assets/jellyfish_gif/first_idle.gif";

function JellyAnimation({ isFeaturing, isGetReady, isRevolution, isGraffiti }) {
    let classNames = ['jellyfish__animation-wrapper'];
    if (isFeaturing) {
        classNames.push('jellyfish__animation-move-show')
        classNames.push('jellyfish__animation-wrapper--featuring')
    } else if (isGetReady) {
        classNames.push('jellyfish__animation-wrapper--get-ready')
    } else if (isRevolution) {
        classNames.push('jellyfish__animation-wrapper--revolution')
    } else if (isGraffiti) {
        classNames.push('jellyfish__animation-wrapper--graffiti')
    } else {
        classNames.push('jellyfish__animation-move-hide')
    }

    return <div className={classNames.join(' ')}>
        <img src={jellyfish} alt="animation" />
    </div>;
}

export default JellyAnimation;
