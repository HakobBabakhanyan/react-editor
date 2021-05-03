import React, {useEffect, useRef, useState} from 'react';
import LeftBar from './LeftBar'

function Editor() {

    const editorEl = useRef<HTMLIFrameElement>(null);


    const [editorIframeWindow, setEditorIframeWindow] = useState<Window | null>()

    const [editorElStyle, setEditorElStyle] = useState({
        fontSize: 16
    })

    useEffect(() => {
        if (editorIframeWindow)
            createDiv(editorIframeWindow);

    }, [editorIframeWindow]);

    useEffect(() => {
        setEditorIframeWindow(editorEl?.current?.contentWindow)
        console.log(editorElStyle.fontSize)
    }, []);

    const createDiv = (editorIframeWindow: Window) => {

        let div = editorIframeWindow.document.createElement('div');

        div.style.width = '100%';
        div.style.height = '100%';
        div.setAttribute('contenteditable', 'true');
        div.addEventListener('input', (e) => {

            const sel = editorIframeWindow.document.getSelection(),
                span = document.createElement('span');

            let parent = editorIframeWindow?.document.querySelector('font[size="7"]');

            if (parent && !sel?.toString()) {
                span.innerHTML = parent?.innerHTML ?? ''
                span.setAttribute('style', `font-size: ${editorElStyle.fontSize}px`)
                parent?.parentNode?.replaceChild(span, parent);

                let range = editorIframeWindow.document.createRange();

                console.log(span)
                range.setStart(span.childNodes[0], 1);
                range.setEnd(span.childNodes[0], 1);
                sel?.removeAllRanges();
                sel?.addRange(range);

            }
        })

        editorIframeWindow.document.body.append(div)

    }

    const setFontFamily = (value: string) => {

        editorIframeWindow?.document.execCommand('fontName', false, 'Arial')
    }


    const setFontSize = (value: string) => {

        if (editorIframeWindow) {
            const sel = editorIframeWindow.document.getSelection(),
                span = document.createElement('span');

            if (sel?.toString()) {

                editorIframeWindow?.document.execCommand('fontSize', false, '7')
                let parent = editorIframeWindow?.document.querySelector('font[size="7"]');
                span.innerHTML = parent?.innerHTML ?? ''
                span.setAttribute('style', `font-size: ${value}px`)
                parent?.parentNode?.replaceChild(span, parent);

                let children = Array.from(span?.querySelectorAll('*') ?? []);

                children.forEach(item => {

                    item?.setAttribute('style', `font-size: inherit`)
                })

                editorIframeWindow?.document.getSelection()?.selectAllChildren(span)
            } else {

                editorIframeWindow?.document.execCommand('fontSize', false, '7')
            }

            editorElStyle.fontSize = parseInt(value)
        }
    }

    const onChangeFontStyle = (value: string) => {

        if (value === 'none') {
            if (editorIframeWindow?.document.queryCommandState('bold')) {
                editorIframeWindow?.document.execCommand('bold')
            }
            if (editorIframeWindow?.document.queryCommandState('italic')) {
                editorIframeWindow?.document.execCommand('italic')
            }
            if (editorIframeWindow?.document.queryCommandState('underline')) {
                editorIframeWindow?.document.execCommand('underline')
            }
        } else
            editorIframeWindow?.document.execCommand(value)

    }
    const onChangeFontColor  = (value: string) => {

        editorIframeWindow?.document.execCommand('foreColor', false, value); // with rgba

        let span = document.createElement('span');
        let parent = editorIframeWindow?.document.querySelector(`font[color="${value}"]`);

        span.innerHTML = parent?.innerHTML ?? ''
        span.setAttribute('style', `color: ${value}`)
        parent?.parentNode?.replaceChild(span, parent);

        editorIframeWindow?.document.getSelection()?.selectAllChildren(span)

    }


    return (
        <div className="w-full flex bg-body min-h-screen">
            <div className="w-3/4 flex justify-center p-5">
                <iframe ref={editorEl} className="w-1/2 bg-white rounded-md">
                </iframe>
            </div>
            <div className="w-1/4">
                <LeftBar
                    setFontFamily={(value: string) => setFontFamily(value)}
                    onChangeFontStyle={(value: any) => onChangeFontStyle(value)}
                    onChangeFontSize={(value: any) => setFontSize(value)}
                    onChangeFontColor={(value: any) => onChangeFontColor(value)}
                />
                <button >save</button>
            </div>
        </div>
    );
}

export default Editor;
