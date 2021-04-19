import React, {useEffect, useRef, useState} from 'react';
import LeftBar from './LeftBar'

function Editor() {

    const editorEl = useRef<HTMLIFrameElement>(null);

    const contentEditable = useRef(null);

    const [html, setHtml] = useState<string>();

    const [editorIframeWindow, setEditorIframeWindow] = useState<Window | null>()

    const [editorElStyle, setEditorElStyle] = useState({
        fontSize: '16px'
    })

    useEffect(() => {
        // document
        if (editorIframeWindow)
            createDiv(editorIframeWindow);

    }, [editorIframeWindow]);

    useEffect(() => {
        // document
        setEditorIframeWindow(editorEl?.current?.contentWindow)
        console.log(editorElStyle.fontSize)
    }, []);

    const createDiv = (editorIframeWindow: Window) => {

        let div = editorIframeWindow.document.createElement('div');

        div.style.width = '100%';
        div.style.height = '100%';
        div.setAttribute('contenteditable', 'true');
        div.addEventListener('beforeinput', (e) => {
            // let element = editorIframeWindow.document.getSelection()?.getRangeAt(0).startContainer;

            //
            // if(!element?.textContent && (element?.childNodes.length === 1)  ){
            //     element?.appendChild(editorIframeWindow.document.createTextNode(e.data??''))
            //     element?.childNodes[1].remove()
            //     e.preventDefault()
            // }

            // @ts-ignore
            // // @ts-ignore
            // console.log(element?.hasChildNodes('br'),document.createElement('br') )
            // console.log(element?.childNodes[0] == document.createElement('br') )
        })
        div.addEventListener('click', (e) => {
          if((e?.target as HTMLElement).style.fontSize)
              console.log((e?.target as HTMLElement).style.fontSize)
            setEditorElStyle({fontSize: (e?.target as HTMLElement).style.fontSize})
        })
        //     div.addEventListener('gotpointercapture', (e) => {
        //     e.preventDefault()
        //     console.log(e)
        // })
        editorIframeWindow.document.body.append(div)

    }

    const setAttribute = () => {
        alert(2)
    }


    const setFontSize = (value: string) => {

        if (editorIframeWindow) {
            const sel = editorIframeWindow.document.getSelection(),
                 span = document.createElement('span');

            if(sel?.toString()){

                editorIframeWindow?.document.execCommand('fontSize',false, '7')
                let parent  = editorIframeWindow?.document.querySelector('font[size="7"]');
                span.innerHTML = parent?.innerHTML??''
                parent?.parentNode?.replaceChild(span, parent);

                let  children = Array.from( span?.querySelectorAll('*') ?? [] );

                children.forEach( item => {

                    item?.setAttribute('style', `font-size: inherit`)
                } )

                editorIframeWindow?.document.getSelection()?.selectAllChildren(span)
            }

            span?.setAttribute('style', `font-size: ${value}px`);

            window?.document?.getSelection()?.setPosition(editorIframeWindow?.document)
            // editorIframeWindow?.document.getSelection()?.selectAllChildren(span)


            // // if( (element?.childNodes.length === 1)  &&
            // //     element?.childNodes[0]?.nodeName === 'BR'
            // // ){
            // //     element?.childNodes[0]?.parentElement?.setAttribute('style', `font-size: ${value}px`);
            // //     return true;
            // // }
            //
            // let parent = element?.parentElement
            //
            // let  children = Array.from( parent?.querySelectorAll('*') ?? [] );
            //

            //
            // parent?.setAttribute('style', `font-size: ${value}px`)
            //

            // let range = sel?.getRangeAt(0);
            // range?.deleteContents();
            //
            // if(element)
            //     console.log(range?.selectNode(element))
            //
            // span.setAttribute('style', `font-size: ${value}px`)
            // // if(text){
            // //     span.appendChild(document.createTextNode(text ))
            // // }else {
            // //     span.appendChild(document.createTextNode( ' '))
            // //
            // //     editorIframeWindow.document.getSelection()?.setPosition(span,0);
            // // }
            // if(text){
            //     span.append(document.createTextNode( text??'' ))
            // }else {
            //
            //     console.log(element?.nodeName)
            //     // if(!element?.textContent && (element?.childNodes.length === 1)  ){
            //     //     element?.appendChild(editorIframeWindow.document.createTextNode(e.data??''))
            //     //     element?.childNodes[1].remove()
            //     //     // e.preventDefault()
            //     // }
            //     span.append(document.createElement( 'br' ))
            // }
            //
            // let range = sel?.getRangeAt(0);
            // range?.deleteContents();
            // range?.insertNode(span);
            //
            // if(!text){
            //     editorIframeWindow.document.getSelection()?.setPosition(span,1)
            // }
            // editorIframeWindow.document.getSelection()?.collapse(span,0);
            // editorIframeWindow?.document.execCommand('fontSize', false, '7');
        }
    }

    const onChangeFontStyle = (value: string) => {

        // console.log(  editorIframeWindow?.document.getSelection()?.getRangeAt(0).toString()?.replace('a','b'))
        //   if(editorIframeWindow){
        //       let span = editorIframeWindow.document.createElement('span'),
        //           // sel = editorIframeWindow?.document.getSelection(),
        //           // selectedText = editorIframeWindow?.document.getSelection()?.toString();
        // span.append(document.createTextNode(selectedText ?? ''))
        // let range = sel?.getRangeAt(0);
        // range?.deleteContents();
        // range?.insertNode(span);
        //       // console.log( p, editorIframeWindow?.document.getSelection()?.setPosition(p,1))
        //   }
        if (editorIframeWindow?.document.queryCommandState('bold')) {
            editorIframeWindow?.document.execCommand('bold')
        }
        if (editorIframeWindow?.document.queryCommandState('italic')) {
            editorIframeWindow?.document.execCommand('italic')
        }
        if (editorIframeWindow?.document.queryCommandState('underline')) {
            editorIframeWindow?.document.execCommand('underline')
        }

        editorIframeWindow?.document.execCommand(value)


    }


    return (
        <div className="w-full flex bg-body min-h-screen">
            <div className="w-3/4 flex justify-center p-5">
                <iframe ref={editorEl} className="w-1/2 bg-white rounded-md">
                </iframe>
                {/*<div ref={editorEl}*/}
                {/*     onBeforeInput={(e:any) => {*/}
                {/*         // e.preventDefault();*/}
                {/*         // if(e.data === '\n'){*/}
                {/*         //     console.log()*/}
                {/*         //     setHtml(html + ' <br>  ');*/}
                {/*         // }else {*/}
                {/*         //     setHtml(html + e.data);*/}
                {/*         // }*/}
                {/*     }*/}
                {/*     }*/}
                {/*     onBlur={(e:any) => {*/}
                {/*         console.log(e)*/}

                {/*         // e.preventDefault();*/}
                {/*         // if(e.data === '\n'){*/}
                {/*         //     console.log()*/}
                {/*         //     setHtml(html + ' <br>  ');*/}
                {/*         // }else {*/}
                {/*         //     setHtml(html + e.data);*/}
                {/*         // }*/}
                {/*     }}*/}
                {/*     onBeforeInputCapture={(e:any) => {*/}
                {/*         // e.preventDefault()*/}
                {/*         // setHtml(html + e.data)*/}
                {/*         // console.log(e.data)*/}
                {/*     }}*/}
                {/*     onInput={(e:any) => {*/}


                {/*         // console.log(e.nativeEvent)*/}
                {/*         // setHtml(e.target.innerHTML);*/}
                {/*     }*/}
                {/*     }*/}
                {/*     contentEditable={true}*/}
                {/*     suppressContentEditableWarning={true}*/}
                {/*     className="w-1/2 bg-white rounded-md">*/}
                {html}
                {/*</div>*/}
            </div>
            <div className="w-1/4">
                <LeftBar
                    setFontFamily={(value: string) => setAttribute}
                    onChangeFontStyle={(value: any) => onChangeFontStyle(value)}
                    onChangeFontSize={(value: any) => setFontSize(value)}
                />
                <button onClick={(value: any) => setAttribute()}>save</button>
            </div>
        </div>
    );
}

export default Editor;
