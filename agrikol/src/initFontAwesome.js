import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faTwitterSquare, faFacebookSquare, faInstagram, faDribbble} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab, faTwitterSquare, faFacebookSquare, faInstagram, faDribbble);
}
export default initFontAwesome;